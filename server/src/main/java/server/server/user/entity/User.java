package server.server.user.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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

}
