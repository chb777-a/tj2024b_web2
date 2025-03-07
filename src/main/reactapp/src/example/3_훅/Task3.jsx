import { useState } from "react"


export default function Task3(){
    // 입력한 이름을 저장하는 state 변수
    const [name , setName] = useState('');
    // 입력한 전화번호를 저장하는 state 변수
    const [phone , setPhone] = useState('');
    // 입력한 이름과 전화번호를 객체로 저장하는 배열 state 변수
    const [ members , setMembers ] = useState([]); // 배열 초기값은 빈 배열 []
    return(
        <>
        <h3> 리액트 과제 </h3>
        이름 : <input value={name} onChange={(e)=>{setName(e.target.value)}}/> <br />
        전화번호 : <input value={phone} onChange={(e)=>{setPhone(e.target.value)}}/> <br />
        <button
            onClick={(e)=>{setMembers([...members, {name , phone}]); setName('') , setPhone('') } }>
            등록
        </button>

        <ul>
            {
                members.map(( member , index ) => {
                    return (
                    <>
                        <li> 이름 : { member.name } , 전화번호 : { member.phone }</li>
                    </>
                    )
                })
            }
        </ul>
        </>
    )
}