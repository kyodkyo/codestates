package com.codestates.member;


import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MemberService {
    public Member createdMember(Member member){
        Member createdMember = member;
        return createdMember;
    }

    public Member updateMember(Member member){
        Member updatedMember = member;
        return updatedMember;
    }

    public Member findMember(long memberId){
        Member member = new Member(memberId, "hgd@email.com", "홍길동", "010-1234-5678");
        return member;
    }

    public List<Member> findMembers(){
        List<Member> members = List.of(
                new Member(1, "hgd@email.com", "홍길동", "010-1234-5678"),
                new Member(2, "lml@email.com", "이몽룡", "010-1111-2222")
        );
        return members;
    }

    public void deleteMember(long memberId){

    }
}
