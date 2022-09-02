package server.server.comment.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import server.server.comment.dto.CommentRequestDto;
import server.server.comment.dto.CommentResponseDto;
import server.server.comment.entity.Comment;
import server.server.comment.mapper.CommentMapper;
import server.server.comment.service.CommentService;

@RestController
@Component
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/post/{post-number}")
public class CommentController {

    private final CommentService commentService;
    private final CommentMapper mapper;

    @PostMapping
    public ResponseEntity postComment(@RequestBody CommentRequestDto postCommentDto) {
        Comment comment = mapper.postRequestToComment(postCommentDto);
        Comment newComment = commentService.createComment(comment);

        CommentResponseDto result = mapper.postResponseToComment(newComment);

        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }
}
