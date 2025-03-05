package example.Task;

public class TaskController {
    void method1(){
        // (1) (변수X) 일회성
        new TaskService().method1();

        // (2) (변수O) 다회성
        TaskService taskService = new TaskService();
        taskService.method1();

        // (3) 스태틱 메소드 static method // new 필요 없음 스태틱이라
        TaskService.method2();

        // (4) 싱글톤 , 메소드

        // (5) 인터페이스 구현체 ( 오버라이딩 )

        // (6) ~ (8) DI , IOC @Autowired
    }
}
