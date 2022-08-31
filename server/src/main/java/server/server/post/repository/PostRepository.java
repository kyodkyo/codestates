package server.server.post.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import server.server.post.entity.Post;

import java.util.List;

public interface PostRepository extends JpaRepository<Post, Integer> {

    @Override
    @Query(value = "SELECT * FROM post p", nativeQuery = true)
    List<Post> findAll();

    @Query(value = "SELECT * FROM post p", nativeQuery = true)
    Post save();
}