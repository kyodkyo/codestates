package server.server.comment.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Getter
@Setter
@AllArgsConstructor
public class CommentResponseDto {

    private int commentNumber;
    private int postNumber;
    private Timestamp date;
    private String comment;
    private int userNumber;

}
