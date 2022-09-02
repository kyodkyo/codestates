package server.server.post.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
@AllArgsConstructor
public class PostRequestDto {

        @NotBlank
        private int userNumber;

        @NotBlank
        private String title;

        @NotBlank
        private String contents;

}
