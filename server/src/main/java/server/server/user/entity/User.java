package server.server.user.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import server.server.post.entity.Post;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class User {

    @Id
    private int userNumber;
    @Column
    private String userId;
    @Column
    @JsonIgnore
    private String userPw;
    @Column
    private String email;

//    @OneToMany(mappedBy = "post")
//    private List<Post> posts = new ArrayList<>();


    public User(String userId, String email, String userPw) {
        this.userId = userId;
        this.email = email;
        this.userPw = userPw;
    }

}
