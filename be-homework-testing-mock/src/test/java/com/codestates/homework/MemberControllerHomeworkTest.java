package com.codestates.homework;

import com.codestates.member.dto.MemberDto;
import com.codestates.member.entity.Member;
import com.codestates.member.mapper.MemberMapper;
import com.codestates.member.service.MemberService;
import com.codestates.stamp.Stamp;
import com.google.gson.Gson;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.BDDMockito.given;
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

    @MockBean
    private MemberService memberService;

    @Autowired
    private MemberMapper memberMapper;

    @Test
    void postMemberTest() throws Exception {
        MemberDto.Post post = new MemberDto.Post("hog@naver.com", "길동", "010-1111-1111");
        String content = gson.toJson(post);
        Member member = memberMapper.memberPostToMember(post);
        member.setStamp(new Stamp());

        given(memberService.createMember(Mockito.any(Member.class))).willReturn(member);

        ResultActions actions =
                mockMvc.perform(
                        post("/v11/members")
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(content)
                );

        MvcResult result = actions
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.data.email").value(post.getEmail()))
                .andExpect(jsonPath("$.data.name").value(post.getName()))
                .andExpect(jsonPath("$.data.phone").value(post.getPhone()))
                .andReturn();

    }

    @Test
    void patchMemberTest() throws Exception {
        MemberDto.Patch patch = new MemberDto.Patch(1, "홍길동", "010-1111-1111", Member.MemberStatus.MEMBER_ACTIVE);
        String content = gson.toJson(patch);
        Member member = memberMapper.memberPatchToMember(patch);
        member.setStamp(new Stamp());

        given(memberService.updateMember(Mockito.any(Member.class))).willReturn(member);

        ResultActions actions =
                mockMvc.perform(
                        patch("/v11/members/1")
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(content)
                );

        MvcResult result = actions
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.data.name").value(patch.getName()))
                .andExpect(jsonPath("$.data.phone").value(patch.getPhone()))
                .andReturn();
    }

    @Test
    void getMemberTest() throws Exception {
        Member member = createM("홍길동", "010-1111-1111");

        given(memberService.findMember(Mockito.anyLong())).willReturn(member);

        ResultActions actions =
                mockMvc.perform(
                        get("/v11/members/1")
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                );

        MvcResult result = actions
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.data.name").value(member.getName()))
                .andExpect(jsonPath("$.data.phone").value(member.getPhone()))
                .andReturn();
    }

    @Test
    void getMembersTest() throws Exception {
        Member member1 = createM("홍길동", "010-1111-1111");
        Member member2 = createM("이순신", "010-1234-1234");

        List<Member> members = new ArrayList<>();
        members.add(member1);
        members.add(member2);
        Page<Member> responsePages = new PageImpl<>(members);
        given(memberService.findMembers(Mockito.anyInt(), Mockito.anyInt())).willReturn(responsePages);

        ResultActions actions =
                mockMvc.perform(
                        get("/v11/members?page=1&size=10")
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                );

        MvcResult result = actions
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.data[0].name").value(member1.getName()))
                .andExpect(jsonPath("$.data[1].name").value(member2.getName()))
                .andReturn();
    }

    @Test
    void deleteMemberTest() throws Exception {
        Member member = createM("홍길동", "010-1111-1111");
        member.setMemberId(1L);

        given(memberService.createMember(Mockito.any(Member.class))).willReturn(member);

        ResultActions actions =
                mockMvc.perform(
                        delete("/v11/members/1" )
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                );

        MvcResult result = actions
                .andExpect(status().isNoContent())
                .andReturn();
    }

    Member createM(String name, String phone){
        Member member = new Member();
        member.setName(name);
        member.setPhone(phone);
        member.setStamp(new Stamp());
        return member;
    }
}