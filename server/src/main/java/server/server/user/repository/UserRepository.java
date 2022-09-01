package server.server.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import server.server.user.entity.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {

}
