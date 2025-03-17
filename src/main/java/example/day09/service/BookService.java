package example.day09.service;

import example.day09.model.dto.BookDto;
import example.day09.model.mapper.BookMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {
    @Autowired private BookMapper bookMapper;

    // 추천 등록
    public boolean onEdit(BookDto bookDto){
        System.out.println("BookService.onUpdate");
        return bookMapper.onEdit(bookDto);
    }

    // 추천 수정
    public boolean onUpdate(BookDto bookDto){
        System.out.println("BookService.onUpdate");
        return bookMapper.onUpdate(bookDto);
    }

    // 추천 삭제
    public boolean onDelete(int bno){
        System.out.println("BookService.onDelete");
        return bookMapper.onDelete(bno);
    }

    // 추천 목록
    public List<BookDto> bookList(){
        System.out.println("BookService.bookList");
        return bookMapper.bookList();
    }

    // 추천 목록 상세
    public BookDto getBook(int bno){
        System.out.println("BookService.getBook");
        return bookMapper.getBook(bno);
    }
}
