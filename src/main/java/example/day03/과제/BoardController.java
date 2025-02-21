package example.day03.과제;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BoardController {
    @Autowired private BoardService boardService;

    @PostMapping("/day03/task/board")
    public boolean write(@RequestBody BoardDto boardDto) {
        boolean result = boardService.write(boardDto);
        return result;
    }

    @GetMapping("/day03/task/board")
    public List<BoardDto> boardAll(){
        List<BoardDto> result = boardService.boardAll();
        return result;
    }

    @GetMapping("/day03/task/board/view")
    public BoardDto boardFor(@RequestParam("bno") int bno){
        BoardDto result = boardService.boardFor(bno);
        return result;
    }

    @PutMapping("/day03/task/board")
    public boolean update(@RequestBody BoardDto boardDto){
        boolean result = boardService.update(boardDto);
        return result;
    }

    @DeleteMapping("/day03/task/board")
    public boolean delete(@RequestParam("bno") int bno){
        boolean result = boardService.delete(bno);
        return result;
    }
}
