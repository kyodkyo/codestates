package server.server.post.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import server.server.dto.MultiResponseDto;
import server.server.post.dto.PostRequestDto;
import server.server.post.dto.PostResponseDto;
import server.server.post.entity.Post;
import server.server.post.mapper.PostMapper;
import server.server.post.service.PostService;

import java.util.List;

@Component
@RequiredArgsConstructor
@RestController   //controller + responseBody
@Slf4j
@RequestMapping("/post")
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
    public ResponseEntity postPosts(@RequestBody PostRequestDto postDto) {
        Post post = mapper.postRequestToPost(postDto);
        Post newPost = postService.createPost(post);

        PostResponseDto result = mapper.postToPostResponse(newPost);

        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }

    @GetMapping("/questions")
    public ResponseEntity findPosts(){
        List<Post> posts = postService.findAllPosts();

        return new ResponseEntity(posts, HttpStatus.OK);
    }


    @DeleteMapping("/questions/{post-number}")
    public ResponseEntity deletePost(@PathVariable("post-number") int postNumber){
        postService.deletePost(postNumber);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
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
