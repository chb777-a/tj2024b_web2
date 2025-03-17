package example.day09.model.dto;

import lombok.*;

@Setter
@Getter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ReviewDto {
    private int rno;
    private String rcontents;
    private String rpwd;
    private int bno;
}
