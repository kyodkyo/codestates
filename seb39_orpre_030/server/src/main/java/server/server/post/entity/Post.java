package server.server.post.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import server.server.user.entity.User;

import javax.persistence.*;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@Getter
@Setter
@Table(name = "post")
@Entity(name = "post")
@NoArgsConstructor
@AllArgsConstructor
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int postNumber;

    @Column
    private int userNumber;

    @Column
    private Timestamp date = Timestamp.valueOf(LocalDateTime.now());

    @Column
    private String title;

    @Column
    private String contents;

    @ManyToOne
    @JoinColumn(name = "userNumber", insertable = false, updatable = false)
    private User user;

    public void setUser(User user) {
        this.user = user;
    }

}




