import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function BookReview(props){
    const [ reviewForm , setReviewForm ] = useState({rtitle : '' , rcontents : '' , rpwd : '' })
    const valueChange = (e) => {
        setReviewForm({...reviewForm , [e.target.name] : e.target.name});
    
    }
    const navigate = useNavigate();
    const onReview = async () => {
        const response = await axios.post('http://localhost:8080/day09/review' , reviewForm)
        if(response.data == true){
            alert('리뷰 등록 성공')
        }else{alert('리뷰 등록 실패')}
    }

    return(
        <>
            <div>
                <h3> 리뷰 등록 </h3>
                <form>
                    리뷰 제목 입력 : <input name="rtitle" value={reviewForm.rtitle} onChange={valueChange}/>
                    리뷰 내용 입력 : <input name="rtitle" value={reviewForm.rtitle} onChange={valueChange}/>
                    리뷰 비밀번호 입력 : <input name="rtitle" value={reviewForm.rtitle} onChange={valueChange}/>
                    <button type="buttion" onClick={ onReview }> 책 리뷰 등록하기 </button>
                </form>
            </div>
        </>
    )
}