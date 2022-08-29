package server.server.post.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.sql.Timestamp;

@Getter
@RequiredArgsConstructor
public class PostResponseDto {
    private int postNumber;
    private int userNumber;
    private Timestamp date;
    private String title;
    private String contents;
}