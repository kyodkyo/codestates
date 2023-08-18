package com.codestates.homework;

import com.codestates.member.dto.MemberDto;
import com.google.gson.Gson;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.transaction.annotation.Transactional;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@Transactional
@SpringBootTest
@AutoConfigureMockMvc
public class MemberControllerHomeworkTest {
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private Gson gson;

    private MemberDto.Post post;

    private ResultActions actions;

    private long memberId = 1L;

    @BeforeEach
    void init() throws Exception {
        post = new MemberDto.Post("dfg@gmail.com", "방현수", "010-1234-4322");
        String content = gson.toJson(post);

        actions =
                mockMvc.perform(
                        post("/v11/members")
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(content));
    }

    @Test
    void postMemberTest() throws Exception {
        // then
        MvcResult result = actions
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.data.email").value(post.getEmail()))
                .andExpect(jsonPath("$.data.name").value(post.getName()))
                .andExpect(jsonPath("$.data.phone").value(post.getPhone()))
                .andReturn();

//        System.out.println(result.getResponse().getContentAsString());
    }

    @Test
    void patchMemberTest() throws Exception {
        // given
        MemberDto.Patch patch = new MemberDto.Patch("방현수2", "010-1111-2222");
        String content = gson.toJson(patch);

        // when
        ResultActions actions =
                mockMvc.perform(
                        patch("/v11/members/{memberId}", memberId)
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(content));

        // then
        MvcResult result = actions
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.data.name").value(patch.getName()))
                .andExpect(jsonPath("$.data.phone").value(patch.getPhone()))
                .andReturn();

        System.out.println(result.getResponse().getContentAsString());
    }

    @Test
    void getMemberTest() throws Exception {
        // when
        ResultActions actions =
                mockMvc.perform(
                        get("/v11/members/{memberId}", memberId)
                                .contentType(MediaType.APPLICATION_JSON));

        // then
        MvcResult result = actions
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.data.memberId").value(memberId))
                .andExpect(jsonPath("$.data.name").value("방현수"))
                .andExpect(jsonPath("$.data.email").value("dfg@gmail.com"))
                .andExpect(jsonPath("$.data.phone").value("010-1234-4322"))
                .andExpect(jsonPath("$.data.stamp").value(0))
                .andReturn();

        System.out.println(result.getResponse().getContentAsString());
    }

    @Test
    void getMembersTest() throws Exception {
        MemberDto.Post post = new MemberDto.Post("ksy@gmail.com", "김성연", "010-1111-5555");
        String content = gson.toJson(post);

        mockMvc.perform(
                post("/v11/members")
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content)
        );

        ResultActions actions =
                mockMvc.perform(
                        get("/v11/members")
                                .param("page", "1")
                                .param("size", "10")
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                );

        MvcResult result = actions
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.pageInfo.totalElements").value(2))
                .andExpect(jsonPath("$.data[0].name").value("김성연"))
                .andExpect(jsonPath("$.data[1].name").value("방현수"))
                .andReturn();

        System.out.println(result.getResponse().getContentAsString());
    }

    @Test
    void deleteMemberTest() throws Exception {
        // when
        ResultActions actions =
                mockMvc.perform(
                        delete("/v11/members/{memberId}", memberId));

        // then
        actions.andExpect(status().isNoContent());
    }
}