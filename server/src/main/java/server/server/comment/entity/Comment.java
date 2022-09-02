package server.server.comment.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import server.server.post.entity.Post;
import server.server.user.entity.User;

import javax.persistence.*;
import java.sql.Timestamp;
import java.time.LocalDateTime;


@Entity(name = "Comment")
@Table(name = "Comment")
@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor

public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int commentNumber;

    @Column
    private int postNumber;

    @Column
    private Timestamp date = Timestamp.valueOf(LocalDateTime.now());

    @Column
    private String comment;

    @Column
    private int userNumber;

    @OneToOne
    @JoinColumn(name = "userNumber", insertable = false, updatable = false)
    private User user;

    public void setUser(User user){
        this.user = user;
    }

}
