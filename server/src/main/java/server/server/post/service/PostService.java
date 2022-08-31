package server.server.post.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Service;
import server.server.post.entity.Post;
import server.server.post.repository.PostRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class PostService {

    private final PostRepository postRepository;

    public Page<Post> findPosts(int page, int size){
        return postRepository.findAll(PageRequest.of(page, size));
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