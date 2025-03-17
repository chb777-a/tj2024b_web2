package web.model.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import web.model.dto.MemberDto;

@Mapper // 해당 인터페이스가 mapper임을 주입

public interface MemberMapper {
    // [1] 회원가입 sql : 입력받은 자료를 등록 : INSERT
    // interface(추상메소드) 이므로 {}가 필요없음
    @Insert("insert into member(mid , mpwd , mname , mimg) values (#{mid}, #{mpwd}, #{mname} , #{mimg})")
    public boolean signUp(MemberDto memberDto);

    // [2] 로그인 -> 입력받은 자료를 확인/검증 : SELECT
    @Select("select mno , mid , mname , mimg from member where mid = #{mid} and mpwd = #{mpwd}")
    // public boolean login( MemberDto memberDto); // boolean : slelect 결과가 있으면 true , 없으면 false (오류/예외) 발생
    public MemberDto login(MemberDto memberDto); // MemberDto : select 결과가 있으면 memberDto , 없으면 null

}
