import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Signup from "./member/Signup";
import Login from "./member/Login";
import Home from "./Home";

export default function App(Props){
    return(<>
        <BrowserRouter>{/* 모든 라우팅 감싸기 */}
            <div id = "wrap">
                
                <Header /> {/* Routes 밖에 있는 컴포넌트들이 고정*/}
                    
                    <Routes> {/* Routes 안에 있는 컴포넌트들이 전환 */}
                        <Route path='/' element={ <Home/> }> </Route>
                        <Route path='/member/signup' element={<Signup/>}></Route>
                        <Route path='/member/login' element={<Login/>}></Route>
                    </Routes>

                <Footer/> {/* Routes 밖에 있는 컴포넌트들이 고정*/}

            </div>
        </BrowserRouter>
        </>)
}