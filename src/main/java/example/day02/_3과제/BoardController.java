package example.day02._3과제;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController // [1] 해당 컨트롤러가 HTTP url 매핑 할 수 있도록 어노테이션 주입
public class BoardController {

    // [2] 현재 과제에서는 DB가 없음 ==> 리스트가 DB 역할을 함
    private final List<BoardDto> boardList = new ArrayList<>();
    private int auto_increment = 1; // bno 자동 번호 역할

    // [3] POST 매핑으로 '/day02/task1/board' 주소의 body값을 매핑하여 함수 매개변수로 받는다.
    @PostMapping("/day02/task1/board")  // 1. POST 매핑주소를 만든다.
    public boolean wirte(@RequestBody BoardDto boardDto) { // 2. body 값을 함수 매개변수로 매핑한다.
    boardDto.setBno(auto_increment); // 3. boardDto의 bno를 넣어준다.
        boardList.add(boardDto); // 4. boardList에 boardDto를 추가한다.
        auto_increment++; // 5. bno auto_inrement 1씩 증가
        return true; // 6. 성공 여부를 true로 반환
    }

    //[4] GET 매핑
    @GetMapping("/day02/task1/board")  // 1. GET 매핑 주소를 만든다.
    public List<BoardDto> readAll() { // 2. GET 요청을 받아 boardList를 반환
        return boardList;   // 3. boardList를 반환
    }
    
    //[5] GET 매핑
    @GetMapping("/day02/task/board/view")
    public BoardDto readOne(@RequestParam(name = "bno") int bno) {
        for (int i = 0 ; i < boardList.size()-1; i++) {
            BoardDto boardDto = boardList.get(i);
            if(boardDto.getBno() == bno) { return boardDto;} // 찾았으면 찾은 Dto 반환
        }
        return null; // 찾지 못했으면 null 반환
    }
    
    //[6] PUT 매핑
    @PutMapping("/day02/task1/board")
    public boolean updateBoard(@RequestBody BoardDto boardDto) {
        for(int i = 0; i < boardList.size()-1; i++) { // 리스트의 모든 게시글을 순회
            BoardDto boardDto2 = boardList.get(i); // 현재 인덱스의 게시글 가져오기
            if(boardDto2.getBno() == boardDto.getBno()) { // 요청한 bno와 일치하는 게시글 찾기
                boardList.set(i, boardDto); // 해당 인덱스의 게시글을 새로운 내용으로 업데이트
                return true; // 성공 시 true 반환
            }
        }
        return false; // 실패 시 false 반환
    }

    // (7) DELETE 매핑
    @DeleteMapping("/day02/task1/board")
    public boolean deleteBoard( @RequestParam( name = "bno") int bno ){
        for( int i = 0 ; i <= boardList.size()-1 ; i++  ){
            BoardDto boardDto2 = boardList.get(i);
            if( boardDto2.getBno() == bno ){
                boardList.remove( i );
                return true;
            }
        }
        return false;
    } // f end

    /*
======================= GPT 학습용 start ===========================

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/day02/task1/board")
public class BoardController {
    private final List<BoardDto> boardList = new ArrayList<>(); // 게시글을 저장하는 리스트
    private int bnoCounter = 1; // 게시글 번호 자동 증가를 위한 변수

    // 글쓰기 (POST 요청)
    @PostMapping
    public boolean createBoard(@RequestBody BoardDto boardDto) {
        boardDto.setBno(bnoCounter++); // 게시글 번호 자동 증가
        boardList.add(boardDto); // 리스트에 추가
        return true; // 성공 여부 반환
    }

    // 전체 글 조회 (GET 요청)
    @GetMapping
    public List<BoardDto> getAllBoards() {
        return boardList; // 저장된 모든 게시글 반환
    }

    // 개별 글 조회 (GET 요청, 쿼리 파라미터 bno 필요)
    @GetMapping("/view")
    public BoardDto getBoard(@RequestParam int bno) {
        return boardList.stream()
                .filter(board -> board.getBno() == bno) // 요청한 bno와 일치하는 게시글 찾기
                .findFirst()
                .orElse(null); // 없으면 null 반환
    }

    // 개별 글 수정 (PUT 요청)
    @PutMapping
    public boolean updateBoard(@RequestBody BoardDto updatedBoard) {
        for (BoardDto board : boardList) {
            if (board.getBno() == updatedBoard.getBno()) { // 해당 bno의 게시글 찾기
                board.setTitle(updatedBoard.getTitle()); // 제목 수정
                board.setContent(updatedBoard.getContent()); // 내용 수정
                return true; // 성공 여부 반환
            }
        }
        return false; // 실패 시 false 반환
    }

    // 개별 글 삭제 (DELETE 요청, 쿼리 파라미터 bno 필요)
    @DeleteMapping
    public boolean deleteBoard(@RequestParam int bno) {
        return boardList.removeIf(board -> board.getBno() == bno); // 해당 bno 게시글 삭제
    }
}
======================= GPT 학습용 end ===========================
    */

} // c end
