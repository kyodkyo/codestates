package server.server.comment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import server.server.comment.entity.Comment;
import server.server.post.entity.Post;

import java.util.List;
import java.util.Optional;

public interface CommentRepository extends JpaRepository<Comment, Integer> {

    List<Comment> findAllByPostNumber(int postNumber);

    Optional<Comment> findByPostNumber(int postNumber);

}
