import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function BookReviewRead(props){
    const [ reviewForm , setReviewForm ] = useState({rtitle : '' , rcontents : '' , rcomments : ''})

    useEffect(() => {onRead();}, [])
    const onRead = async () => {
        const response = await axios.get('http://localhost:8080/day09/review')
        setBookReview(response.data);
    }

    const [bookReview , setBookReview] = useState([])
    
    const navigate = useNavigate();
    
    const reviewUpdate = () => {
        navigate("/bookreviewread")
    }
    
    const [deleteContent , setDeleteContent] = useState('')
    const onValueChange = (e) => {
        setDeleteContent(e.target.value)
    }
    const reviewDelete = async() =>{
        const responsed = await axios.delete(`http://localhost:8080/day09/review?rno=${deleteContent}`)
        if(responsed.data == true){
            alert('삭제 성공');
        }else{alert('삭제 실패');}
    }

    return(
        <>
         <div>
                <h3> 책 추천 목록 </h3>
                <table>
                    <thead>
                        <tr> <th> 번호 </th> <th> 책 제목 </th> <th> 책 저자 </th> <th> 책 설명 </th></tr>
                    </thead>
                    <tbody>
                        {
                            bookReview.map(( review , index )=>{
                                return(
                                    <tr>
                                        <td> {review.rno} </td>
                                        <td> {review.rtitle} </td>
                                        <td> {review.rcontents} </td>
                                        <td> {review.bcomments} </td>
                                        <button type="button" onClick={ bookUpdate }> 수정하기 </button>
                                        <button type="button" onClick={ bookDelete }> 삭제하기 </button>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}