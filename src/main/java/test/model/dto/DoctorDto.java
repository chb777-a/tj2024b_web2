package test.model.dto;

import lombok.*;

@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DoctorDto {
    private int doctorId;
    private String dname;
    private String dspecialty;
    private String dphone;
    private String dcreatedate;
}
