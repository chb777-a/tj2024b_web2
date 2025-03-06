import { useState } from "react";

let a = 0;// 전역 변수
export default function Example2(props){
    a++; // 전역 변수 1씩 증가
    let b = 0; // 지역 변수
    b++; // 지역 변수 1씩 증가

    console.log( `전역변수 a : ${a}`)
    console.log( `지역변수 a : ${b}`)

    // 전역변수 / 지역변수 증가 하는 함수
    const addfunction2 = () =>{
        a++; b++;
        console.log( a , b );
    }

    // state 변수 사용 , 훅 종류 중에 핵심함수 , useState , 코드 파일 상단에 import { useState } from "react"; 떠야함 없으면 추가!
    let c = useState(0); // state 상태 변수 선언
    console.log(c); // [0] : 변수 값 , [1] : 변수 값 수정할 수 있는 함수 제공 = > 2개를 갖는 배열로 반환
    console.log(c[0]); // 0
    console.log(c[1]) // 내장 함수 (f dispatchSetState ~~ )

    const addfunction3 = () =>{
        c[1](c[0]++); // 컴포넌트 / 함수 가 재실행 == > return 다시 실행된다.
        // 전역 변수는 컴포넌트/함수 재실행(렌더링)에 관계가 없으므로 누적이 되어서 증가를 하게 됨.
        // 지역 변수는 컴포넌트/함수 재실행(렌더링)에 관계가 있으므로 초기화가 됨.
        // state 변수는 지역/전역 변수가 같은 개념이 아닌 리액트가 별도로 상태(값) 저장 / 관리 해준다. (의존성 변수)
        
    }
    // state 일반적인 사용법 : 구조 분해 , const [변수명 , set변수명] = useState(0);
    const [count , setCount] = useState(0);

    const addfunction4 = () => {
        console.log(count); // 0
            //count = count + 1; // 증가 // const 불가능 // const 상수
        console.log(count);
        // 렌더링 제공 함수 : setXXX ( 새로운 값 )
        setCount(count); // setXXX ( 새로운 값 )
        setCount( count + 1); // count가 const(상수) 일 때 count +1 가능 , count++(count = count + 1) 상수(변하지 않음)라 ++ 불가능
    }

    // 컴포넌트(함수) : 한 번 return 된 JSX 문법의 결과 ( HTML ) 는 불변성이다.
    return(
        <>
            <div>
                <p> 일반 변수 : {a} , {b} </p>
                <button onClick={addfunction2}> 증가함수 </button>
            </div>
            <div>
                <p> state 변수 : {c} </p>
                <button onClick={addfunction3}> 증가함수2 </button>
            </div>
            <div>
                <p> state 변수2 : {count} </p>
                <button onClick={addfunction4}> 증가함수3</button>
            </div>
        </>
    )
}

/*
    - 변수란 : 하나의 자료를 저장할 수 있는 메모리 저장 공간
    - 리터럴이란 : 자료 그 자체
        let a = 10;
        let b = 10;
        let c = 30;
            변수 3개 (a , b , c), 자료 2개 (10 , 30)
        let d = a + 1
            변수 4개 (a , b , c , d) , 자료 3개 (10 , 30 , 11(a+1))

        ***********************************************************************************
            let d = 10 + 1 [두 개의 자료를 연산하여 새로운 하나의 결과값을 만들었다.]
        ***********************************************************************************

    - 연산이란 : 하나 이상의 값(피연산자)를 정해진 기호(연산자)에 계산했을 때 ***하나의 결과***를 도출함
*/