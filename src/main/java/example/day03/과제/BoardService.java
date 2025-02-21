package example.day03.과제;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardService {
    @Autowired private BoardMapper boardMapper;

    public boolean write(BoardDto boardDto) {
        boolean result = boardMapper.write(boardDto);
        return result;
    }

    public List<BoardDto> boardAll(){
        List<BoardDto> result = boardMapper.boardAll();
        return result;
    }

    public BoardDto boardFor(int bno){
        BoardDto result = boardMapper.boardFor(bno);
        return result;
    }

    public boolean update(BoardDto boardDto){
        boolean result = boardMapper.update(boardDto);
        return result;
    }

    public boolean delete(int bno){
        boolean result = boardMapper.delete(bno);
        return result;
    }
}
