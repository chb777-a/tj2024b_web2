package web.controller;

import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import web.model.dto.MemberDto;
import web.service.MemberService;

import java.lang.reflect.Member;

@RestController // @ResponseBody 포함 , restApi를 지원하는 컨트롤러 빈 등록
@RequestMapping("/api/member") // 클래스내 http 매핑 주소의 공통 url 정의할 때 사용
// ==> 개발하는 사람들이 페이지 매핑과 REST 매핑 구분하기 위한 방법
// 1. 페이지 URL Ex) : member/signup
// 2. REST URL Ex) : 1. /member/signup.do : 뒤에 do를 붙이는 경우( 과거에 많이 사용 ) 2. /api/member/singup : 앞에 api를 붙이는 경우 ( 최근에 많이 사용 )

@RequiredArgsConstructor // final 멤버변수에 대해서 생성자를 자동으로 지원한다.
    // final 필드에 대해서 자동으로 생성자를 생성하므로 @Autowired 주입을 생략해도 된다.

public class MemberController {
    private final MemberService memberService;
    // [1] 회원가입
    @PostMapping("/signup")
    public boolean signUp(@RequestBody MemberDto memberDto){
        System.out.println("MemberController.signUp");
        System.out.println("memberDto = " + memberDto);
        // return false;
        boolean result = memberService.signUp(memberDto);
        return result;
    }

    // [2] 로그인 + 세션 ( 서버 내 저장소 = 주로 로그인된 회원정보 또는 장바구니 ) : HttpServletRequest req
    @PostMapping("/login")
    public boolean login(@RequestBody MemberDto memberDto , HttpServletRequest req ){
        System.out.println("MemberController.login");
        System.out.println("memberDto = " + memberDto);
        // return false;
        MemberDto result = memberService.login(memberDto);
        if( result == null ){return false;} // 서비스 결과가 null 이면 로그인 실패
        else{ // 서비스 결과가 null이 아니면 로그인 성공 => 세션에 로그인 성공한 dto를 저장
            HttpSession session = req.getSession(); // 세션 호출
            session.setAttribute("loginDto" , result ); // 세션 객체 내 새로운 속성 추가 , 로그인 성공한 결과를 "loginDto" 라는 이름으로 저장
            session.setMaxInactiveInterval(60 * 10 ); // 세션 유지 시간 설정 (초) : 60 * 10 : 10분
            return true; // 로그인 성공 처리
        } // e end

    } // f end

    // [3] 로그아웃 + 세션 삭제
    @GetMapping("/logout")
    public boolean logout(HttpServletRequest req){
        HttpSession session = req.getSession(); // 1. 세션 호출
        if( session == null) return false;
        session.invalidate();// 2. 세션 삭제 (세션내 전체 속성 초기화)
        // session.removeAttribute("loginDto"); // 2. 세션 내 특정 속성만 초기화
        return true; // 로그아웃 성공 처리
    }

    // [4] 로그인 상태 확인 ( 내 정보 보기 / 마이페이지 )
    @GetMapping("/info")
    public MemberDto info(HttpServletRequest req){
        HttpSession session = req.getSession(); // 1. 세션 호출 if
        if(session == null) return null; // 2. 만약에 세션이 존재하지 않으면 null
        Object object = session.getAttribute("loginDto"); // 3. 로그인 성공시 저장한 loginDto의 로그인 정보를 꺼낸다.
        MemberDto memberDto = (MemberDto)object;// 4. 세션에 저장된 자료들은 모두 Object 타입이므로 타입변환 필요
        return memberDto; // 5. 로그인된 정보 반환
    }


}
