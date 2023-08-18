package server.server.post.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Getter
@Setter
@AllArgsConstructor
public class PostResponseDto {

    private int postNumber;
    private int userNumber;
    private Timestamp date;
    private String title;
    private String contents;

}