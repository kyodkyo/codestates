package com.codestates.member.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Builder
@Getter
@Setter
public class PageInfoDto {

    private int page;
    private int size;
    private int totalElments;
    private int totalPages;

    public PageInfoDto(int page, int size, int totalElments, int totalPages) {
        this.page = page;
        this.size = size;
        this.totalElments = totalElments;
        this.totalPages = totalPages;
    }

}
