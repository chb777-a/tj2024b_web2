package example.day09.model.mapper;

import example.day09.model.dto.ReviewDto;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface ReviewMapper {
    // 리뷰 등록
    @Insert("insert into bookreview(rtitle, rcontents, rpwd) values(#{rtitle}, #{rcontents}, #{rpwd})")
    public boolean onReview(ReviewDto reviewDto);

    // 리뷰 삭제
    @Delete("delete from bookreview where rno = #{rno} and rpwd = #{rpwd}")
    public boolean deleteReview(int rno, String rpwd);

    // 리뷰 전체 조회
    @Select("select * from bookreview where bno = #{ bno }")
    public List<ReviewDto> reviewList(int bno);
}
