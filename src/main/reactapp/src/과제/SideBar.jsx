import { Link } from "react-router-dom"

export default function SideBar(props) {
    return(<>
        <ul>
            <li>사이드바 메뉴</li>
            <li><Link to="/book">책 등록 </Link></li>
            <li><Link to="/bookread">책 출력</Link></li>
            <li><Link to="/bookreview">리뷰 등록</Link></li>
            <li><Link to="/bookreviewread">리뷰 조회</Link></li>
        </ul>
    </>)
}