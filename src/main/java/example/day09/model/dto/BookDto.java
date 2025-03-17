package example.day09.model.dto;

import lombok.*;

@Setter
@Getter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookDto {
    private int bno;
    private String btitle;
    private String bwriter;
    private String bcomments;
    private String bpwd;
}
