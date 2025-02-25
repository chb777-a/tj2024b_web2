package test.model.dto;

import lombok.*;

@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PatientDto {
    private int patientId;
    private String pname;
    private String pbrithdate;
    private String pphone;
    private String paddress;
    private String pcreatedate;
}
