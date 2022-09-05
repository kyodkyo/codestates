package server.server.comment.service;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import server.server.comment.entity.Comment;
import server.server.comment.repository.CommentRepository;
import server.server.exception.BusinessLogicException;
import server.server.exception.ExceptionCode;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;


    public Comment createComment(Comment comment) {
        return commentRepository.save(comment);
    }


    public List<Comment> findComments(int postNumber) {
        return commentRepository.findAllByPostNumber(postNumber);
    }


    public void deleteComment(int commentNumber) {
        Comment findComment = findVerifiedComment(commentNumber);
        commentRepository.delete(findComment);
    }


    public Comment findVerifiedComment(int commentNumber){
        Optional<Comment> optionalComment = commentRepository.findByCommentNumber(commentNumber);

        Comment findComment = optionalComment.orElseThrow(
                () -> new BusinessLogicException(ExceptionCode.COMMENT_NOT_FOUND));

        return findComment;
    }


    public void deleteComments(List<Comment> commentList){
        for(Comment dComment : commentList){
            dComment = findVerifiedComment(dComment.getPostNumber(), dComment.getCommentNumber());
            commentRepository.delete(dComment);
        }
    }

    public Comment findVerifiedComment(int postNumber, int commentNumber){
        Optional<Comment> optionalComment = commentRepository.findByPostNumberAndCommentNumber(postNumber, commentNumber);

        Comment findComment = optionalComment.orElseThrow(
                () -> new BusinessLogicException(ExceptionCode.COMMENT_NOT_FOUND));

        return findComment;
    }


}
