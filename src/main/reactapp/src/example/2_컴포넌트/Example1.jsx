//(1)
export default function Example1( props ){
        // ========== JSX 문법 Start ========== //
    return (
        <div>
            {/* 주석 처리 방법 */}
            <h3> 컴포넌트 </h3>
            {/* 다른 컴포넌트 호출*/}
            <Component1/>
            <Component2/>
            <Component3/>
            <Component4/>
            <Component5/>
            <Component6/>
            <Component7/>
        </div>
    )
        // ========== JSX 문법 End ========== //

} // f 1 end

//(2) 한 줄 입력 시 소괄호 생략 가능
function Component1(props){
    return <h4>한줄로 입력시 () 생략 가능</h4>
} // f 2 end

//(3) 두 줄 이상 입력 시 소괄호 필수 ( 생략 불가능 )
function Component2(props){
    return(
        <div>
            <h4> 두 줄 이상으로 입력 시 ( 소괄호 ) 필수로 감싸야 한다.</h4>
        </div>
    )
} // f 3 end

//(4) 이름없는 마크업 대체 사용 가능
function Component3 (props){
    return ( <>
            <h4> div 대신에 이름없는 마크업 사용 가능</h4>
            </>)
} // f 4 end

//(5)
function Component4 (props){
    const name = "유재석"
    const age = 50;
    const obj = { name : "유재석" , age : 50 }
    
    return (
        <>
            <h3> {name} 의 나이 : {age} </h3>
            <h3> {obj.name} 의 나이 : {obj.age} </h3>
        </>
    )
} // f 5 end

//(6)
function Component5(props){
    const loginStatement = true ; // 로그인 상태
    // JSX 문법 { } 표현식에서는 if , for , function , const , let 불가능
    return (
    <>
        <h3> {loginStatement == true ? '로그인 중' : '비로그인 중'} </h3>
        <h3> {loginStatement && <p> 로그인 상태일 때만 보이는 메세지 </p>} </h3>
    </>
    )
} // f 6 end

//(7)
function Component6 (props){
    const items =[ '사과' , '바나나' , '배']
    // JSX 문법의 목록(li , option 등등) 마크업들에는 key 속성 필요로 한다.
        // => 리액트는 자동렌더링(새로고침) 할 때 key 변화를 감지하여 변환된 key만 별도로 랜더링하는 기능 포함
    // JSX 문법에서는 forEach함수 보다 map함수를 자주 사용
    return(
        <>
            <ul>
                {
                    items.map(
                        (item, index ) => (
                        <li key = {index}> {item} </li>)
                    )
                }
            </ul>
        </>
    )
} // f 7 end

//(8)
// css 파일 import 가능
import'./Example1.css' // import '경로/css파일명.css'
function Component7 (props){
    // style 속성에 style='color:blue' = X
    // style 속성에 style={{CSS객체}} = O // *** 주의할 점 : css 카멜표기법 사용 , JS의 속성명은 -하이픈 사용하지 못해서 카멜표기법 사용
    const cssobj = { color : 'red' , fontSize : 17} // 객체로 css 만듬
    // class 속성이 아닌 className 사용
    return(
        <>
        <h4 style={{color : 'blue'}}> 인라인 형식의 css 넣기 </h4>
        <h4 style={cssobj}> 인라인 형식의 객체 css 넣기 </h4>
        <h4 className="myclass"> css 파일 내 선택자 이용한 css 넣기 </h4>
        </>
    )
} // f 8 end

