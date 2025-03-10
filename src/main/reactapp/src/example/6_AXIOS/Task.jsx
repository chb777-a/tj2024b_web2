import axios from "axios";
import { useEffect, useState } from "react";

export default function NumberSystem(props){
    // 입력받은 데이터 저장하는 state 변수
    const [ formData , setFormData ] = useState({ name : '' , phone : '' })
    // 입력받은 데이터 렌더링하는 이벤트 함수
    const formChange = (e) => {
        console.log(e.target);
        console.log(e.target.name);
        console.log(e.target.value);
        setFormData({...formData , [e.target.name] : e.target.value});
    }

    // state 변수 스프링에게 보내기 ( axios )
    const onPost = async (e) => {
        try{
            const response = await axios.post('http://192.168.40.18:8080/pratice/react' , formData); // state 변수 axios로 보내기
            if( response.data == true ){ // true 응답이 뜨면
                alert('입력 성공')
                setFormData({name : '' , phone : ''}) // state 리셋
                onView(); // 등록 성공시 렌더링
            }else{
                alert('입력 실패');
            }
        }catch(error){console.log(error);}
    }

    // 저장된 전화번호부정보 요청
    useEffect(() => {onView()} , []); // 최초 1번 실행 ( onView --> setBoard )

    const [ boards , setBoards ] = useState([]); // 여러 개 전화번호부 가지는 state 변수

    const onView = async (e) => {
        try{
            const response = await axios.get('http://192.168.40.18:8080/pratice/react');
            setBoards(response.data); // 서버에서 받은 정보를 state 변수 ( board )에 저장
        }catch(error){console.log(error);}
    }


    return(
        <>
            <div>
                <h3> 전화번호부 </h3>
                <form>
                    이름 : <input type="text" value={formData.name} name="name" onChange={formChange}/>
                    전화번호 : <input type="text" value={formData.phone} name="phone" onChange={formChange}/>
                    <button type="button" onClick={ onPost }> 등록 </button>
                </form>
                <table border={1}>
                <thead> <tr> <th> 이름 </th> <th> 전화번호 </th></tr></thead>
                <tbody>{
                    boards.map((board , i)=>{
                        return(
                            <tr key={i}>
                                <td>{board.id}</td>
                                <td>{board.name}</td>
                                <td>{board.phone}</td>
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