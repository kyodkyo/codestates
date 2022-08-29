package server.server.comment.entity;

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
public class Comment {
    @Id
    private int commentNumber;
    @Column
    private int postNumber;
    @Column
    private Timestamp date;
    @Column
    private String comment;
    @Column
    private int userNumber;

    public Comment(int commentNumber, int postNumber, Timestamp date, String comment, int userNumber) {
        this.commentNumber = commentNumber;
        this.postNumber = postNumber;
        this.date = date;
        this.comment = comment;
        this.userNumber = userNumber;
    }
}
