package web.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import web.model.dto.MemberDto;
import web.model.mapper.MemberMapper;

import java.lang.reflect.Member;

@Service // 해당 클래스가 서비스임을 주입
@RequiredArgsConstructor // final 필드에 대해서 @Autowired 생략 가능
public class MemberService {
    private final MemberMapper memberMapper;
    private final FileService fileService; // 파일 서비스 ( 업로드 , 다운로드 , 파일 삭제 ) 기능 포함
    // [1] 회원가입
    public boolean signUp(MemberDto memberDto){
        System.out.println("MemberService.signUp");
        System.out.println("memberDto = " + memberDto);
        // return false;
        try {
            // (1) if 첨부파일(프로필 업로드) 존재하는지 검사
            if (memberDto.getUploadfile() == null) { // 업로드한 파일이 존재하지 않으면
            } else { // 업로드한 파일이 존재하면 파일 서비스의 업로드 메소드 사용
                //(2) 파일 서비스내 업로드 함수 이용하여 첨부파일 업로드하고 파일명 받기
                String filename = fileService.fileUpload(memberDto.getUploadfile());
                //(3) 업로드된 파일명을 dto에 저장
                memberDto.setMimg(filename);
            }
            boolean result = memberMapper.signUp(memberDto);
            return result;
        }catch (Exception e){return false;} // 업로드와 회원가입DB 처리 중 예외 발생하면 false 반환
    }

    // [2] 로그인
    public MemberDto login(MemberDto memberDto){
        System.out.println("MemberController.login");
        System.out.println("memberDto = " + memberDto);
        // return false;
        MemberDto result = memberMapper.login(memberDto);
        return result;
    }


}
