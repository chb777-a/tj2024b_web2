import axios from "axios"
import { useEffect, useState } from "react"
import { Await, Navigate, useNavigate } from "react-router-dom";

export default function BookRead(props){

    useEffect(()=>{
        onRead();
    }, [] )
    
    const onRead = async ()=>{
        const response = await axios.get('http://localhost:8080/day09/booksystem')
        setBooks(response.data);
    }

    const [ books , setBooks ] = useState([])
    
    const navigate = useNavigate();
    const bookUpdate = ()=>{
        navigate("/bookreload")
    }

    const [deleteContent ,setDeleteContent] = useState('')
    const onValueChange = (e) =>{
        setDeleteContent(e.target.value)
    }

    const bookDelete = async() =>{
        //삭제로직
        const responsed = await axios.delete(`http://localhost:8080/day09/booksystem?bno=${deleteContent}`)
        if(responsed.data == true){alert('삭제 성공'); navigate('/bookread');}
        else{alert('삭제 실패');}
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
                            books.map(( book , index )=>{
                                return(
                                    <tr>
                                        <td> {book.bno} </td>
                                        <td> {book.btitle} </td>
                                        <td> {book.bwriter} </td>
                                        <td> {book.bcomments} </td>
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