package server.server.post.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.sql.Timestamp;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Post {

    @Id
    private int postNumber;
    @Column
    private int userNumber;
    @Column
    private Timestamp date;
    @Column
    private String title;
    @Column
    private String contents;

    public Post(int postNumber, int userNumber, Timestamp date, String title, String contents) {
        this.postNumber = postNumber;
        this.userNumber = userNumber;
        this.date = date;
        this.title = title;
        this.contents = contents;
    }
}
