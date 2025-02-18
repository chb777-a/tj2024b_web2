package example.day02._3과제;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
public class BoardController2 {

    //@Autowired // 싱글톤 호출 대신에 Autowired 사용 (
    @Autowired
    private BoardDao boardDao;
    @PostMapping("/day02/task2/board")
    // 1. 글 쓰기
    public boolean write(@RequestBody BoardDto boardDto) {
        return boardDao.write(boardDto);
    }

    @GetMapping("/day02/task2/board")
    // 2. 글 전체 조회
    public ArrayList<BoardDto> readAll() {
        return boardDao.readAll();
    }

    // 3. 글 개별 조회
    @GetMapping("/day02/task2/board/view")
    public BoardDto readOne( @RequestParam( name = "bno") int bno) {
        return boardDao.readOne(bno);
    }

    // 4. 글 수정
    @PutMapping("/day02/task2/board")
    public boolean updateBoard(@RequestBody BoardDto boardDto) {
        return boardDao.updateBoard(boardDto);
    }

    // 5. 글 삭제
    @DeleteMapping("/day02/task2/board")
    public boolean deleteBoard(@RequestParam( name = "bno") int bno) {
        return boardDao.deleteBoard(bno);
    }
}// c end
