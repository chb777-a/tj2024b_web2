package web.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@Data   //@Getter @Setter @ToString 등등 포함되어있는 어노테이션
@AllArgsConstructor // 전체 생성자
@NoArgsConstructor  // 빈 생성자
@Builder // 빌더패턴 지원
public class MemberDto {
    private int mno;
    private String mid;
    private String mpwd;
    private String mname;
    private String mimg; // [DB] 업로드된 파일의 파일명
    //
    private MultipartFile uploadfile; // [FORM 전송] 등록시 업로드 된 파일의 바이트 인터페이스 (1개)
    // private List<MultipartFile> uploadfiles; // 등록시 여러개 업로드 된 파일들 (여러개)
}
