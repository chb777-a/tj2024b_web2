package example.day07.service;

import example.day07.model.dto.NumberDto;
import example.day07.model.mapper.NumberMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class NumberService {
    @Autowired private NumberMapper numberMapper;
    public boolean onPost(NumberDto numberDto){ return numberMapper.onPost(numberDto);}

    public List<NumberDto> onView(){ return numberMapper.onView();}
}
