package server.server.user.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class User {

    @Id
    private long userNumber;
    @Column
    private String userId;
    @Column
    private String userPw;
    @Column
    private String email;

    public User(String userId, String email, String userPw) {
        this.userId = userId;
        this.email = email;
        this.userPw = userPw;
    }

}
