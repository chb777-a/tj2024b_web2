import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function BookReload (props){
    const [ bookForm , setBookForm] = useState({bno : '' , btitle : '' , bwriter : '' , bcomments : '' , bpwd : ''})
    const valueChange = (e)=>{
        setBookForm({...bookForm , [e.target.name] : e.target.value})
    }
    const navigate = useNavigate();
    const onReload = async () => {
        const response = await axios.put('http://localhost:8080/day09/booksystem' , bookForm)
        if(response.data == true ){ alert('수정 성공'); navigate('/bookread');}
        else{alert('수정 실패 ( 책 번호 / 비밀번호가 다릅니다.)')}
    }

    return(
        <>
            <div>
                <form>
                    수정 책 번호 : <input name="bno" value={ bookForm.bno} onChange={ valueChange } />
                    수정 책 제목 : <input name="btitle" value={ bookForm.btitle} onChange={ valueChange } />
                    수정 책 저자 : <input name="bwriter" value={ bookForm.bwriter} onChange={ valueChange } />
                    수정 책 소개 : <input name="bcomments" value={ bookForm.bcomments} onChange={valueChange } />
                    수정 비밀번호 : <input name="bpwd" value={ bookForm.bpwd} onChange={valueChange} />
                    <button type="button" onClick={onReload}> 수정하기 </button>
                </form>
            </div>
        </>
    )
}