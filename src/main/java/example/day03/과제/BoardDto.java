package example.day03.과제;

import lombok.*;

@Setter@Getter@ToString@Builder
@NoArgsConstructor@AllArgsConstructor
public class BoardDto {
    private int bno;
    private String btitle;
    private String bcontent;
}
