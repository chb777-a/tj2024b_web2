package example.day09.model.mapper;

import example.day09.model.dto.BookDto;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface BookMapper {
    // 추천 등록
    @Insert("insert into booksystem(btitle, bwriter, bcomments, bpwd) values(#{ btitle }, #{ bwriter}, #{ bcomments }, #{ bpwd })")
    public boolean onEdit(BookDto bookDto);

    // 추천 수정
    @Update("update booksystem set btitle = #{ btitle }, bwriter = #{ bwriter }, bcomments = #{ bcomments }, bpwd = #{ bpwd } where bno = #{ bno }")
    public boolean onUpdate(BookDto bookDto);

    // 추천 삭제
    @Delete("delete from booksystem where bno = #{ bno }")
    public boolean onDelete(int bno);

    // 추천 목록
    @Select("select * from booksystem")
    public List<BookDto> bookList();

    // 추천 목록 상세
    @Select("select * from booksystem where bno = #{ bno }")
    public BookDto getBook(int bno);
}
