/*
 리액트 과제3 : 리액트 전화번호부 만들기
    조건1 : ( 저장 ) ' 이름' , '전화번호' 입력받아 배열에 저장
    조건2 : ( 전체 출력 ) 저장된 배열 내 모든 정보(이름/전화번호)를 table 또는 ol 또는 ul 로 모두 출력하시오
    조건3 : useState 사용
*/

import { useState } from "react";

export default function Task2(props){

    const [numberList , setNumberList] = useState([])
    const [name , setName] = useState('');
    const [phone , setPhone] = useState('');

    const putName = (e) => {
        setName(e.target.value);
    }

    const putPhone = (e) =>{
        setPhone(e.target.value);
    }

    const saveuser = (e) => {
        setNumberList([...numberList])
    }

    
    const add = (e) => {
        let addNumber = [...numberList, {name : name, phone : phone}];
        setNumberList(addNumber);
        setName("");
        setPhone("");
    }

    return(
        <>
            <h1>리액트 전화번호부</h1>
            <div>
                <div>
                    <input value={name} onChange={putName} />
                    <p>  이름 : </p>
                    <input value={phone} onChange={putPhone} />
                    <p>전화번호 : </p>
                    <button onClick={add}>등록</button>
                </div>
                <br/>
                <table border={1}>
                    <thead>
                        <tr>
                            <td>이름</td>
                            <td>전화번호</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            numberList.map((item, index) => (
                                //console.log(item),
                                <MakeRow key={index} name={item.name} phone={item.phone} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}