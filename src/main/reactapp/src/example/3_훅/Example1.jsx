let a = 0; // 함수 밖 전역 변수

export default function Example1(props){
    let b = 0; // 함수 안 지역 변수
    ++a; // a 1씩 증가
    ++b; // b 1씩 증가

    const addfunc = () => {
        ++a; // a 1씩 증가
        ++b; // b 1씩 증가
        // + innerHTML 안 했기 때문에
        console.log( a ); // 3 // JS에서는 변경 되었지만 HTML에서는 반영이 안 된다.
        console.log( b ); // 3 // JS에서는 변경 되었지만 HTML에서는 반영이 안 된다.
        // *** 즉 , 렌더링 (*새로고침) 필요로 함. why? 함수의 reuturn 1번 한다.
        // *** 즉 , 한 번 return된 JSX는 불변성!!
        // *** 즉 , return 이후에 JS내 변수값이 변경 , 수정 되어도 HTML에는 변화가 없다.

    }

    return (
        <>
            <h3>{ ++a }</h3> { /* 2 */}
            <h3>{ ++b }</h3> { /* 2 */}
            <button type="button" onClick={addfunc}> 증가 함수</button>
        </>
    )
}