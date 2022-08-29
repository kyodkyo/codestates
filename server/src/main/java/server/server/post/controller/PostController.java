package server.server.post.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import server.server.post.entity.Post;
import server.server.post.mapper.PostMapper;
import server.server.post.service.PostService;

import java.util.List;

@Component
@RequiredArgsConstructor
@RestController   //controller + responseBody
@Slf4j
public class PostController {

    private final PostService postService;
    private final PostMapper mapper;


    @GetMapping("/")
    public ResponseEntity getPosts(){
        List<Post> posts = postService.findPosts();

//        for(Post post : posts){
//            System.out.println(post.getContents());
//        }

//        List<PostResponseDto> postResponseDtoList = new ArrayList<>();

        return new ResponseEntity(mapper.postsToPostResponseDtos(posts), HttpStatus.OK);
    }

}