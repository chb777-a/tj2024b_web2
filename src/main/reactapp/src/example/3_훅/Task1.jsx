import { useState } from "react";

export default function Task1(props) {
    
    // (1) 여기에 state 변수 만들기
    const [count , setCount] = useState(0) // 상태 변수 만들기

    
    const [countList , setCountList] = useState([])
    const savefunction = (o) => {
        // countList.push(count); // 입력받은 값이 저장된 state인 'count'를 'countList' 저장
        // setCountList(countList);  => 불가능
        // 기본 타입 자료는 리터럴이라서 그 값 그 자체 -> 기본타입 자료가 변경되면 그 값 그 자체를 변경
        // 참조 타입 ( 포장지 ) 자료는 안에 있는 자료가 변경해도 -> 참조타입 자체는 변경되지 않았다.
        // ex) 가방( 핸드폰 = 삼성 , 지갑 ) , 핸드폰을 애플로 변경 , 가방 ( 핸드폰 = 애플 , 지갑 )
            // -> 새로운 가방 // 기존 가방 복제/복사
            // 복사 방법 : 1.map 2. ...스프레드 연산자 3. pre

        setCountList([...countList])
        // setCountList((countList) => [ ...countList , count])
    }

    // const [ 변수명 , set변수명 ] = useState(초기값)
        // - 변수명 : 아무거나 (임의)
        // - set변수명 : set변수명 (카멜표기법)
            // -> set변수명 ( 새로운값 )        * 새로운 값 이라는 기준은 자료의 주소 값 변경
        // - =useState( 초기값 ) : 모든 타입의 자료 가능하다.

    const handleChange = (event) => {
        // (2) 여기에서 state 변수값 수정하기.
        setCount(event.target.value.length); // 매개변수.target.값.길이
        console.log(event.target.value.length);
    }

    const handleChange2 = (e) => {
        setCount(e.target.value) // event.target : input
    }


    return (
        <>
            <h3> input에 입력하면 실시간으로 글자 수 세기1</h3>
            <input onChange={handleChange}/>
            <p> 글자 수: {count} </p>

            <h3> input에 입력하면 실시간으로 글자 수 세기2</h3>
            <input onChange={handleChange2}/>
            <p> 글자 수: {count.length} </p>

            <h3> 입력받은 값 배열에 저장 </h3>
            <button onClick={savefunction}> 저장 </button>
        </>
    )
}