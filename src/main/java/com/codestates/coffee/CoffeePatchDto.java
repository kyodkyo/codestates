package com.codestates.coffee;

import com.codestates.member.NotSpace;
import org.springframework.lang.Nullable;

import javax.validation.constraints.*;

public class CoffeePatchDto {
    private long coffeeId;
    @NotSpace(message = "한글 커피명은 공백이 아니어야 합니다.")
    private String korName;
    @NotSpace(message = "영문 커피명은 공백이 아니어야 합니다.")
    @Pattern(regexp = "^([A-Za-z])(\\s?[A-Za-z]).*$",
            message = "영문 커피명은 대소문자만 가능하며, 단어 사이의 공백은 한칸만 가능합니다.")
    private String engName;


    @Min(value = 100, message = "100원 이상의 가격이어야 합니다.")
    @Max(value = 50000, message = "50000원 이하의 가격이어야 합니다.")
    private int price;

    public long getCoffeeId() {
        return coffeeId;
    }

    public void setCoffeeId(long coffeeId) {
        this.coffeeId = coffeeId;
    }

    public String getKorName() {
        return korName;
    }

    public void setKorName(String korName) {
        this.korName = korName;
    }

    public String getEngName() {
        return engName;
    }

    public void setEngName(String engName) {
        this.engName = engName;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }
}
