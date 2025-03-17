package example.day09.controller;

import example.day09.model.dto.ReviewDto;
import example.day09.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/day09/review")
public class ReviewController {
    @Autowired private ReviewService reviewService;

    // 리뷰 등록
    @PostMapping("")
    public boolean onReview(@RequestBody ReviewDto reviewDto){
        System.out.println("ReviewController.onReview");
        System.out.println("reviewDto = " + reviewDto);
        return reviewService.onReview(reviewDto);
    }

    // 리뷰 삭제
    @DeleteMapping("")
    public boolean deleteReview(@RequestParam int rno, String rpwd){
        System.out.println("ReviewController.deleteReview");
        System.out.println("bno = " + rno + ", rpwd = " + rpwd);
        return reviewService.deleteReview(rno, rpwd);
    }

    // 리뷰 전체 조회
    @GetMapping("")
    public List<ReviewDto> reviewList(@RequestParam int bno){
        System.out.println("ReviewController.reviewList");
        return reviewService.reviewList(bno);
    }
}
