package server.server.member.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import server.server.member.entity.Member;

public interface MemberRepository extends JpaRepository<Member, Long> {

    Member findByUsername(String username);

}
