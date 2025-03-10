package example.day07.model.mapper;

import example.day07.model.dto.NumberDto;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

@Mapper
public interface NumberMapper {
    @Insert("insert into user(name , phone) values(#{name} , #{phone})")
    public boolean onPost(NumberDto numberDto);

    @Select("select * from user")
    public List<NumberDto> onView();
}
