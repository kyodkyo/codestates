package com.codestates.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@AllArgsConstructor
@Getter
public class PageResponseDto {
    private List<MemberResponseDto> data;
    private PageInfoDto pageInfo;
}
