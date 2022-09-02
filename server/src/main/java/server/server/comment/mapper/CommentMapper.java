package server.server.comment.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import server.server.comment.dto.CommentRequestDto;
import server.server.comment.dto.CommentResponseDto;
import server.server.comment.entity.Comment;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface CommentMapper {
    Comment postRequestToComment(CommentRequestDto commentRequestDto);
    CommentResponseDto postResponseToComment(Comment comment);
}
