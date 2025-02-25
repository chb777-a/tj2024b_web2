package test.model.dto;

import lombok.*;

@Getter@Setter@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AppointmentDto {
    private int appointmentId;
    private String appointmentDate;
    private String appointmentTime;

}
