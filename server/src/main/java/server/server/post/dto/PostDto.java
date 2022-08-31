package server.server.post.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.sql.Timestamp;

@Getter
public class PostDto {

    @Getter
    @AllArgsConstructor
    public static class RequestPostDto{
        @NotBlank
        private int userNumber;

        @NotBlank
        private String title;

        @NotBlank
        private String contents;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class ResponsePostDto {
        private int postNumber;
        private int userNumber;
        private Timestamp date;
        private String title;
        private String contents;
    }
}
