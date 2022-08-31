package server.server.post.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import server.server.post.entity.Post;

import java.util.List;
import java.util.Optional;

public interface PostRepository extends JpaRepository<Post, Long> {

    @Override
    @Query(value = "SELECT * FROM post INNER JOIN user ON post.post_number = user.user_number"
            ,nativeQuery = true)
    List<Post> findAll();

    Optional<Post> findByPostNumber(int postNumber);



}