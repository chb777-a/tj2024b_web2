/*
 리액트 과제3 : 리액트 전화번호부 만들기
    조건1 : ( 저장 ) ' 이름' , '전화번호' 입력받아 배열에 저장
    조건2 : ( 전체 출력 ) 저장된 배열 내 모든 정보(이름/전화번호)를 table 또는 ol 또는 ul 로 모두 출력하시오
    조건3 : useState 사용

    [1] .jsx 파일 생성
    [2] 파일 내 컴포넌트(함수) 생성, 컴포넌트명 : 첫글자 대문자 필수!
        export default function 컴포넌트명(){
        return (<></>)
        }
    [3] main.jsx에서 생성한 컴포넌트 렌더링
    [4] 입력 상자의 state 변수 , document.querySelector() 방식이 아닌
        (1) 선언 방법 : const [ 변수명 , set변수명 ] = useState(초기값)
            -> 초기값 : 다양한 자료의 모든 타입 가능하다
                문자열 초기 : '' , 정수 초기 : 0 , 실수 초기 : 0.0 , 객체 초기 : { } , 배열 초기 : [ ]
                방법 1
                const [ name , setName ] = useState('');
                const [ phone , setPhone ] = useState('');
                const [ members , setMembers ] = useState([]);
                방법 2
                const [ member , setMember ] = useState({name : '' , phone : ''});
                const [ members , setMembers ] = useState([]);
                방법 3
                const [ members , setMembers ] = useState ( [ { name : '' , phone : ''} ] )

        (2) event(e) 이벤트 객체
            onChange = ( event ) => {} , onChange 이벤트 실행 결과를 다음 함수의 매개변수로 전달
            event.target : 이벤트 발생한 DOM(HTML 마크업)
            event.target.vlaue : 이벤트 발생한 DOM의 value 속성 반환

        (3) setXXX ( 새로운 값 ) , ...스프레드연산자
            setXXX( event.target.value )
            setXXX([...기존배열 , 새로운 값])

    [5] map 반복문 이용한 출력
        {
            리스트/배열명.map( ( 반복변수명, 인덱스 ) => {
                return(<></>)
            })
        }
*/



import { useState } from "react";

export default function Task2(props){

    const [name , setName] = useState(''); // 입력한 이름을 저장하는 state 변수
    const [phone , setPhone] = useState(''); // 입력한 전화번호를 저장하는 state 변수
    const [numberList , setNumberList] = useState([]) // 배열 초기값은 빈 배열 []

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

const MakeRow = (props) => {
    return (
        <>
            <tr>
                <td>{props.name}</td>
                <td>{props.phone}</td>
            </tr>
        </>
    );
}