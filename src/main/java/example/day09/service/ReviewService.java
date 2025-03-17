package example.day09.service;

import example.day09.model.dto.ReviewDto;
import example.day09.model.mapper.ReviewMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {
    @Autowired private ReviewMapper reviewMapper;

    // 리뷰 등록
    public boolean onReview(ReviewDto reviewDto){
        System.out.println("ReviewService.onReview");
        return reviewMapper.onReview(reviewDto);
    }

    // 리뷰 삭제
    public boolean deleteReview(int rno, String rpwd){
        System.out.println("ReviewService.deleteReview");
        return reviewMapper.deleteReview(rno, rpwd);
    }

    // 리뷰 전체 조회
    public List<ReviewDto> reviewList(int bno){
        System.out.println("ReviewService.reviewList");
        return reviewMapper.reviewList(bno);
    }
}
