package server.server.comment.dto;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import server.server.comment.service.CommentService;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/")
public class CommentDto {

    private final CommentService commentService;
}
