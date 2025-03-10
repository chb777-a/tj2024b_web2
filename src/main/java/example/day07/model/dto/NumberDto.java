package example.day07.model.dto;

import lombok.*;

@Setter
@Getter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class NumberDto {
    private int id;
    private String name;
    private String phone;
}
