package server.server.post.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import server.server.post.entity.Post;

import java.util.List;
import java.util.Optional;

public interface PostRepository extends JpaRepository<Post, Integer> {

    List<Post> findAll();

    Optional<Post> findByPostNumber(int postNumber);

}

// @Query(value="", nativeQuery = true)