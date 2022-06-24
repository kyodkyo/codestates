package com.codestates.coffee;

import com.codestates.member.NotSpace;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class CoffeePostDto {
    @NotBlank(message = "한글 커피명은 공백이 아니어야 합니다.")
    private String korName;
    @NotBlank(message = "영문 커피명은 공백이 아니어야 합니다.")
    @Pattern(regexp = "^([A-Za-z])(\\s?[A-Za-z])*$",
            message = "영문 커피명은 대소문자만 가능하며, 단어 사이의 공백은 한칸만 가능합니다.")
    private String engName;
    @Min(value = 100, message = "100원 이상의 가격이어야 합니다.")
    @Max(value = 50000, message = "50000원 이하의 가격이어야 합니다.")
    private int price;

    public String getKorName() {
        return korName;
    }

    public String getEngName() {
        return engName;
    }

    public int getPrice() {
        return price;
    }
}
