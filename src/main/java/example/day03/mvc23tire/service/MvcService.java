package example.day03.mvc23tire.service;

import example.day03.mvc23tire.model.repository.MvcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service // MVC 패턴의 service임을 알리는 어노테이션
// *** 스프링 컨테이너(메모리) 등록함으로써 스프링이 ( 자동 / 알아서 ) 서비스 제어한다.
public class MvcService {
    // 순환참조 조심하기!
    // @Autowired MvcController mvcController;

    // Controller --> service --> repository 구조

    //[2] (디폴트) 생성자에 빈 주입
    final MvcRepository mvcRepository;
    @Autowired
    public MvcService(MvcRepository mvcRepository) {
        this.mvcRepository = mvcRepository;
    }
}
