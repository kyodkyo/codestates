package server.server.comment.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@AllArgsConstructor
public class CommentRequestDto {

    @NotBlank
    private int userNumber;

    @NotBlank
    private int postNumber;

    @NotBlank
    private String comment;

}
