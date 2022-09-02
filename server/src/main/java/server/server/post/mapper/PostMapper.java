package server.server.post.mapper;


import org.mapstruct.Mapper;

import org.mapstruct.ReportingPolicy;

import server.server.post.dto.PostRequestDto;
import server.server.post.dto.PostResponseDto;
import server.server.post.entity.Post;


@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface PostMapper {

    Post postRequestToPost(PostRequestDto postDto);
    PostResponseDto postToPostResponse(Post post);

}