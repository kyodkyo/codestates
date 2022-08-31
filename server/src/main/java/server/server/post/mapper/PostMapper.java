package server.server.post.mapper;


import org.mapstruct.Mapper;

import server.server.post.dto.PostDto;

import org.springframework.data.domain.Page;

import server.server.post.dto.PostResponseDto;
import server.server.post.entity.Post;

import java.util.List;

@Mapper(componentModel = "spring")
public interface PostMapper {

    PostResponseDto postToPostResponseDto(Post post);
    List<PostResponseDto> postsToPostResponseDtos(List<Post> posts);


    Post postDtoToPost(PostDto.RequestPostDto postDto);
    PostDto.ResponsePostDto postToResponse(Post post);

    List<PostResponseDto> pagePostsToPostResponseDto(List<Post> posts);


}