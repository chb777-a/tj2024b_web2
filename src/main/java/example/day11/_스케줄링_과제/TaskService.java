package example.day11._스케줄링_과제;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;


@Service
public class TaskService {

    @Autowired
    private TaskMapper taskMapper;

    @Scheduled(fixedRate = 30000)
    public void reduce() {
        taskMapper.reduce();
    }


    @Scheduled(fixedRate = 60000)
    public void view() {
        List<HashMap<String,String>> products = taskMapper.view();
        for (HashMap<String,String> product : products) {
            System.out.println(product);
        }

    }


    @Scheduled(fixedRate = 300000)
    public void increase() {
        taskMapper.increase();
    }
}