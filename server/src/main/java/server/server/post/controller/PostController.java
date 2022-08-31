package server.server.post.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;
import server.server.post.dto.MultiResponseDto;
import server.server.post.dto.PostDto;
import server.server.post.dto.PostResponseDto;
import server.server.post.entity.Post;
import server.server.post.mapper.PostMapper;
import server.server.post.service.PostService;

import java.util.ArrayList;
import java.util.List;

@Component
@RequiredArgsConstructor
@RestController   //controller + responseBody
@Slf4j
public class PostController {

    private final PostService postService;
    private final PostMapper mapper;

    @GetMapping
    public ResponseEntity getPosts(@RequestParam int page, @RequestParam int size){
        Page<Post> pagePosts = postService.findPosts(page, size);
        List<Post> posts = pagePosts.getContent();

        return new ResponseEntity<>(new MultiResponseDto<>(posts, pagePosts), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity postPosts(@RequestBody PostDto.RequestPostDto postDto) {
        Post post = mapper.postDtoToPost(postDto);
        Post mpPost = postService.createPost(post);
//        PostDto.ResponsePostDto resultDto = mapper.postToResponse(mpPost);
        return new ResponseEntity<>(mpPost, HttpStatus.CREATED);
    }

}



/**
 *
 *
        @GetMapping("/questions")
        public ResponseEntity getPosts(){
            List<Post> posts = postService.findPosts();
    //        List<PostResponseDto> postResponseDtoList = new ArrayList<>();

            return new ResponseEntity(posts, HttpStatus.OK);
        }
 */
