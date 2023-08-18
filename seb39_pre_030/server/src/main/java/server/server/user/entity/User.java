package server.server.user.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@Data
@Getter
@Setter
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String userId;

    @Column
    @JsonIgnore
    private String userPw;

    @Column
    private String email;

    @Column
    private String role;

    //    private LocalDateTime createdAt = LocalDateTime.now();
    @Column
    @JsonIgnore
    private Timestamp createdAt = Timestamp.valueOf(LocalDateTime.now());

    @Column
    @JsonIgnore
    private String provider;

    @Column
    @JsonIgnore
    private String providerId;

    @Builder
    public User(String userId, String email, String role, String provider, String providerId) {
        this.userId = userId;
        this.email = email;
        this.role = role;
        this.provider = provider;
        this.providerId = providerId;
    }

//    @OneToMany(mappedBy = "post")
//    private List<Post> posts = new ArrayList<>();

//    @OneToOne
//    @JoinColumn(name = "user_number")
//    private Comment comment;

}
