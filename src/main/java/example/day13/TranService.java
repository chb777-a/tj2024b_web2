package example.day13;

import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class TranService {
    private final TranMapper tranMapper;
    @Transactional // 해당 메소드는 트랜잭션을 적용한다는 뜻 // 발동 조건 : 'RuntimeException'
    // 해당 메소드에서 처리하는 모든 SQL은 'RuntimeException'이 발생되면 롤백되서 모든 SQL이 취소된다.
    public boolean tran(){
        tranMapper.tran("유재석"); // (1) 첫번째 insert
        // 학습용 : 여기에 고의저긍로 문제(예외) 발생해서 아래 insert를 못하게
        if(true) {
            throw new RuntimeException("강제로 실행예외 발생"); // 예외 발생하면 아래 코드가 실행되지 않는다.
            //(3) 만약에 두개 insert 하는 도중에 첫번째 insert 이후 문제가 발생하면 두번째 insert 실행 불가
            // 유재석만 저장
            // --> @Transactional 이후에는 유재석도 롤백이 된다.
        }

        tranMapper.tran("강호동"); // (2) 두번째 insert
        return true;
    }
    // (2) '이체' 트랜잭션 // 아래 메소드의 'withdraw'(출금) 과 'deposit'(입금) 처리를 하나의 논리 작업 단위 만들기
        // 기본 발동 조건 : RuntimeException
    @Transactional(rollbackFor = Exception.class) // 모든 예외 클래스에 대한 롤백이 적용된다.
    public boolean transfer( Map<String,String> params ){
        // 예외처리방법1 : try{}catch( 예외클래스명 e){}
        // 예외처리방법2 : throws 예외클래스명{}

        // 유효성 검사 : 보내는사람/ 받는사람 존재 여부 , 이체할 금액 확인
        // 유효성 검사 실패시 : false 아닌 강제 예외 발생 만들기

        //1. 보내는 사람의 금액을 차감(출금)
            String fromName = params.get("fromname");
            int money = Integer.parseInt(params.get("money"));
            tranMapper.withdraw(fromName, money);

        //2. 받는 사람의 금액을 추가(입금)
            String toName = params.get("toname");
            tranMapper.deposit(toName, money);
            return true;
    }

    // (3) 매일 9시(스케줄링)에 모든 회원들에게 100원씩 입금 , +트랜잭션 ,  +스트림 , +메소드래퍼런스
        //1. 매일 9시 스케줄링 , @Scheduled(cron = "초 분 시 일 월 요일") , AppStart 에서 @EnableScheduling 적용
    @Scheduled(cron = " 0 0 9 * * *")
        //2. 해당하는 메소드에서 예외 발생시 모든 sql은 취소/롤백 된다.
    @Transactional(rollbackFor = Exception.class)
    public void Task() throws Exception {
        //1. 모든 회원목록 조회, tranMapper.finadAll();
        //2. 모든 회원들에게 100원씩 입금
            tranMapper.findAll()//모든 회원 목록 조회
                    .stream() // 조회 결과 스트림 생성
            //.filter( name -> !name.equals("유재석") )
            // 스트림의 각 데이터(이름)으로 입금 처리
            //방법1 : //.forEach( name -> tranMapper.deposit( name , 100 ) );
            // 방법2 :
            .forEach(this::despositAll);// this는 현재 스트림에서 각 데이터(이름)객체 뜻
            System.out.println("모든 회원들에게 100원씩 입금 완료");
        List<String> names = tranMapper.findAll();
        //  스트림/람다식/레퍼런스 적용 vs 일반적인 방법
        for (int i = 0; i < names.size(); i++){// 1. 모든 회원 조회
            String name = names.get(i);
            tranMapper.deposit(name , 100);
        }
    }
    public void despositAll(String name){
        tranMapper.deposit(name , 100);
    }
}
