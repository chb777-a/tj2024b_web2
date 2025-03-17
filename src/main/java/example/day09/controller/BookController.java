package example.day09.controller;

import example.day09.model.dto.BookDto;
import example.day09.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/day09/booksystem")
public class BookController {
    @Autowired private BookService bookService;

    // 추천 등록
    @PostMapping("")
    public boolean onEdit(@RequestBody BookDto bookDto){
        System.out.println("BookController.onEdit");
        System.out.println("bookDto = " + bookDto);
        return bookService.onEdit(bookDto);
    } // f end

    // 추천 수정
    @PutMapping("")
    public boolean onUpdate(@RequestBody BookDto bookDto){
        System.out.println("BookController.onUpdate");
        System.out.println("bookDto = " + bookDto);
        return bookService.onUpdate(bookDto);
    } // f end

    // 추천 삭제
    @DeleteMapping("")
    public boolean onDelete(@RequestParam int bno){
        System.out.println("BookController.onDelete");
        System.out.println("bno = " + bno);
        return bookService.onDelete(bno);
    } // f end

    // 추천 목록
    @GetMapping("")
    public List<BookDto> bookList(){
        System.out.println("BookController.bookList");
        System.out.println("bookService = " + bookService);
        return bookService.bookList();
    } // f end

    // 추천 목록 상세
    @GetMapping("/view")
    public BookDto getBook(@RequestParam int bno){
        System.out.println("BookController.getBook");
        System.out.println("bno = " + bno);
        return bookService.getBook(bno);
    }

} // c end
