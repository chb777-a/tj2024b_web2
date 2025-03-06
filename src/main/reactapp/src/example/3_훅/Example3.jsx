import { useState } from "react";

export default function Example3(props){
    
    // 일반적인 JS 방법
    const inputfunction = () => {
        const msg = document.querySelector('#msg').value;
        console.log(msg);
    }
    // 리액트 방법
    const [msg , setMsg] = useState('') // (렌더링) 상태(state)변수 : 변수값에 따른 컴포넌트를 렌더링 / 새로고침 제공
    const inputfunction2 = (eventObj) => {
        console.log(eventObj);               // onChange 실행 후 이벤트 결과 정보 (객체)
        console.log(eventObj.tartget);       // onChange 이벤트를 발생시킨 마크업(대상)
        console.log(eventObj.tartget.value); // onChange 이벤트를 발생시킨 마크업의 value 반환
        // 기존 방법 1) document.querySelector('XXX').value
        // 리액트 방법 e.target.value
        setMsg(eventObj.target.value); // --> 사용자 입력한 input 값을 리액트에서 관리한다.
    }

    // 리액트 이미지 변경 방법
    const [image , setImage] = useState('use1.png') // 이미지를 저장하는 state 변수 선언
    // 임의의 이미지를 2개 이상 다운로드 받아서 리액트 폴더 내 public 저장
    const changefunction = () => {
        // state변수의 값이 변경되면 자동으로 렌더링 ( 새로고침 ) 컴포넌트 재호출 , 함수 다시 return // 리액트 UI 업데이트
        // state변수의 값을 변경하는 방법 : set변수명( 새로운 값 )
        setImage(image == 'use1.png' ? 'use2.png' : 'use1.png')
    }

    return(
        <>
            <h1> 일반적인 JS 방법 </h1>
            <input id = "msg"/><br/>
            <button onClick={inputfunction}> 입력 버튼 </button>

            <h1> 리액트 JS 방법 </h1>
            <input value={msg} onChange={inputfunction2}/> <br />

            <h1> 리액트 상태 변경 </h1>
            
            <img onClick={ () => {setImage(image == 'use1.png' ? 'use2.png' : 'use1.png') } } src={image}/>
        </>
    )
}
            // 1. 함수 사용 <img onClick={changefunction} src={image} />
            // 2. 함수 미사용 <img onClick={ () => {setImage(image == 'user1.png' ? 'user2.png' : 'user1.png') } } src={image}/>

/*
    HTML 이벤트 함수 , onXXX , 미리 만들어진 함수 제공
        [1] 종류
            onclick     : HTML 마크업에 클릭했을 때 클릭 이벤트함수 실행
            onchange    : HTML 마크업에 값이 변경되었을 때 이벤트함수 실행
            etc
        [2] 반환을 제공
            - 이벤트 함수가 실행된 결과를 객체로 다음 로직으로 반환
            - onClick = { ( e ) => { } }
                onClick 함수가 실행되고 나서 실행결과를 e(매개변수)로 다음 함수에게 전달
    
    HTML 이벤트 함수 VS JSX(리액트) 이벤트 함수 차이점
    함수명 :    onclick/onchange vs onClick/onChange                *** 차이점 : 리액트에는 카멜표기법 사용
    속성값 :    onclick = "함수명()" vs onclick = {함수명}          *** 차이점 : 리액트에는 {} 안에 함수호출이 아닌 함수명 표시한다.
    결과리턴 :  onclick = "함수명(e)" vs onClick = {함수명}         : 함수명이 존재하는 경우 [다회성]
                                    vs onClick = { (e) =? { } }    : 함수명이 존재하지 않는경우 [ 일회성 ]
*/