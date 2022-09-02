package server.server.comment.service;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import server.server.comment.entity.Comment;
import server.server.comment.repository.CommentRepository;
import server.server.exception.BusinessLogicException;
import server.server.exception.ExceptionCode;
import server.server.post.entity.Post;

import java.util.List;
import java.util.Optional;

@Transactional
@Slf4j
@Service
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;


    public Comment createComment(Comment comment) {
        return commentRepository.save(comment);

    public List<Comment> findComments(int postNumber) {
        return commentRepository.findAllByPostNumber(postNumber);
    }

    public void deleteComment(int postNumber) {
        Comment findComment = findVerifiedComment(postNumber);
        commentRepository.delete(findComment);
    }

    public Comment findVerifiedComment(int postNumber){
        Optional<Comment> optionalComment = commentRepository.findByPostNumber(postNumber);

        Comment findComment = optionalComment.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.COMMENT_NOT_FOUND));

        return findComment;
    }
    
}
