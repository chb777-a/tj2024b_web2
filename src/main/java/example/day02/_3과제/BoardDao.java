package example.day02._3과제;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository // @Component 사용 가능
public class BoardDao {
    private ArrayList<BoardDto> boardList = new ArrayList<>();
    private int auto_increment = 1;

    // 1.글 쓰기
    public boolean write(BoardDto boardDto) { // 2. body 값을 함수 매개변수로 매핑한다.
        boardDto.setBno(auto_increment); // 3. boardDto의 bno를 넣어준다.
        boardList.add(boardDto); // 4. boardList에 boardDto를 추가한다.
        auto_increment++; // 5. bno auto_inrement 1씩 증가
        return true; // 6. 성공 여부를 true로 반환
    }

    // 2.글 전체 조회
    public ArrayList<BoardDto> readAll() { // 2. GET 요청을 받아 boardList를 반환
        return boardList;   // 3. boardList를 반환
    }

    // 3.글 개별 조회
    public BoardDto readOne(int bno) {
        for (int i = 0; i < boardList.size() - 1; i++) {
            BoardDto boardDto = boardList.get(i);
            if (boardDto.getBno() == bno) {
                return boardDto;
            } // 찾았으면 찾은 Dto 반환
        }
        return null; // 찾지 못했으면 null 반환
    }
        
    // 4.글 수정
    public boolean updateBoard(BoardDto boardDto ) {
        for (int index = 0; index <= boardList.size() - 1; index++) {
            BoardDto boardDto2 = boardList.get(index);
            if (boardDto2.getBno() == boardDto.getBno()) {
                boardList.set(index, boardDto);
                return true;
            }
        }
        return false;
    }
    /* 오류
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
    */
    // 5.글 삭제
    public boolean deleteBoard( int bno ){
        for( int i = 0 ; i <= boardList.size()-1 ; i++  ){ // 리스트의 모든 게시글을 순회
            BoardDto boardDto2 = boardList.get(i); // 현재 인덱스의 게시글 가져오기
            if( boardDto2.getBno() == bno ){ // 요청한 bno와 일치하는 게시글 찾기
                boardList.remove( i ); // i 번째 인덱스를 삭제
                return true; // 성공 시 true 반환
            }
        }
        return false; // 실패시 false 반환
    } // f end
}