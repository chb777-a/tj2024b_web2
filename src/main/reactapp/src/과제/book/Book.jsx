import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Book(props){
    const [ bookForm , setBookForm ] = useState({ btitle : '' , bwriter : '' , bcomments : '' , bpwd : '' })
    const valueChange = (e) => {
        setBookForm({...bookForm , [e.target.name] : e.target.value});
    }
    const navigate = useNavigate();
    const onBook = async () => {
        const response = await axios.post('http://localhost:8080/day09/booksystem' , bookForm )
        if(response.data == true){alert('책 추천 등록 성공'); navigate('/bookread')}
        else{alert('책 추천 등록 실패')}
    }

    return(
        <>
        <div>
            <h3>책 추천 등록</h3>  
            <form>
                책 이름 입력 : <input name="btitle" value={bookForm.btitle} onChange={ valueChange }/>
                책 저자 입력 : <input name="bwriter" value={bookForm.bwriter} onChange={ valueChange }/>
                책 소개 입력 : <input name="bcomments" value={bookForm.bcomments} onChange={ valueChange }/>
                비밀번호 입력 : <input name="bpwd" value={bookForm.bpwd} onChange={valueChange} />
                <button type="button" onClick={ onBook }> 책 추천 등록하기 </button>
            </form>
        </div>
        </>
    )
}