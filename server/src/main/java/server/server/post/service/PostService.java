package server.server.post.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import server.server.post.entity.Post;
import server.server.post.repository.PostRepository;

import server.server.exception.BusinessLogicException;
import server.server.exception.ExceptionCode;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class PostService {

    private final PostRepository postRepository;

    public List<Post> findAllPosts(){
        return postRepository.findAll();
    }

    public Page<Post> findPosts(int page, int size){
        return postRepository.findAll(PageRequest.of(page, size));
    }

    public Post createPost(Post post) {
        return postRepository.save(post);
    }

    public void deletePost(int postNumber){
        Post findPost = findVerifiedPost(postNumber);
        postRepository.delete(findPost);
    }

    private Post findVerifiedPost(int postNumber){
        Optional<Post> optionalPost = postRepository.findByPostNumber(postNumber);

        Post findPost = optionalPost.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.POST_NOT_FOUND));

        return findPost;
    }

}


/**
 * 참고 코드
 *
 * ---- pageable 이용 ----
 *     public Page<Post> list(@PageableDefault(size = 10, direction = Sort.Direction.DESC) Pageable pageable){
 *         return postRepository.findAll(pageable);
 *     }
 */