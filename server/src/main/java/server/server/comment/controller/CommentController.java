package server.server.comment.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import server.server.comment.dto.CommentRequestDto;
import server.server.comment.dto.CommentResponseDto;
import server.server.comment.entity.Comment;
import server.server.comment.mapper.CommentMapper;
import server.server.comment.service.CommentService;

@Slf4j
@Component
@RestController
@RequiredArgsConstructor
@RequestMapping("/comment")
public class CommentController {

    private final CommentService commentService;
    private final CommentMapper mapper;

    @PostMapping("/{post-number}")
    public ResponseEntity postComment(@RequestBody CommentRequestDto commentRequestDto) {
        Comment comment = mapper.postRequestToComment(commentRequestDto);
        Comment newComment = commentService.createComment(comment);

        CommentResponseDto result = mapper.postResponseToComment(newComment);

        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }


    @DeleteMapping("/delete/{comment-number}")
    public ResponseEntity deleteComment(@PathVariable("comment-number") int commentNumber){
        commentService.deleteComment(commentNumber);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }


}
