package server.server.post.dto;

import lombok.Getter;

import java.sql.Timestamp;

@Getter
public class PostDto {
    private int postNumber;
    private int userNumber;
    private Timestamp date;
    private String title;
    private String contents;
}
