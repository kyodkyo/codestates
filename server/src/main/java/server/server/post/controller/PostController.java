package server.server.post.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;
import server.server.comment.entity.Comment;
import server.server.comment.service.CommentService;
import server.server.dto.MultiResponseDto;
import server.server.exception.BusinessLogicException;
import server.server.post.dto.PostRequestDto;
import server.server.post.dto.PostResponseDto;
import server.server.post.entity.Post;
import server.server.post.mapper.PostMapper;
import server.server.post.service.PostService;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Component
@RestController   //controller + responseBody
@RequiredArgsConstructor
@RequestMapping("/post")
public class PostController {

    private final PostService postService;
    private final CommentService commentService;
    private final PostMapper mapper;


    @GetMapping("/questions/detail/{post-number}")
    public ResponseEntity getPost(@PathVariable("post-number") int postNumber) {
        Post post = postService.findVerifiedPost(postNumber);

        List<Comment> comments = commentService.findComments(postNumber);

        List<Object> result = new ArrayList<>();
        result.add(post);
        result.add(comments);

        return new ResponseEntity<>(result, HttpStatus.OK);
    }


    @GetMapping
    public ResponseEntity getPosts(@RequestParam int page, @RequestParam int size) {
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
    public ResponseEntity findPosts() {
        List<Post> posts = postService.findAllPosts();

        return new ResponseEntity(posts, HttpStatus.OK);
    }


    @DeleteMapping("/questions/delete/{post-number}")
    public ResponseEntity deletePost(@PathVariable("post-number") int postNumber) {
        List<Comment> commentList = commentService.findComments(postNumber);
        commentService.deleteComments(commentList);

        postService.deletePost(postNumber);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

}
