package example.day03.과제;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardMapper {
    boolean write(BoardDto boardDto);
    List<BoardDto> boardAll();
    BoardDto boardFor(int bno);
    boolean update(BoardDto boardDto);
    boolean delete(int bno);

}
