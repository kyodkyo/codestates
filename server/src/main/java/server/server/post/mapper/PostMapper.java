package server.server.post.mapper;


import org.mapstruct.Mapper;
import org.springframework.data.domain.Page;
import server.server.post.dto.PostResponseDto;
import server.server.post.entity.Post;

import java.util.List;

@Mapper(componentModel = "spring")
public interface PostMapper {

    PostResponseDto postToPostResponseDto(Post post);
    List<PostResponseDto> postsToPostResponseDtos(List<Post> posts);

    List<PostResponseDto> pagePostsToPostResponseDto(List<Post> posts);

}