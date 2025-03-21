import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from './book/Home';
import Book from './book/Book';
import BookReload from "./book/BookReload";
import BookDelete from "./book/BookDelete";
import BookReview from "./bookReview/BookReview";
import SideBar from "./SideBar";
import BookRead from "./book/BookRead";

export default function App(Props){
    return(
        <>
        <BrowserRouter>
            <div id = "wrap">
                <SideBar/>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/book" element={<Book/>}/>
                    <Route path="/bookread" element={<BookRead/>}/>
                    <Route path="/bookreload" element={<BookReload/>}/>
                    <Route path="/bookreview" element={<BookReview/>}/>
                </Routes>
            </div>
        </BrowserRouter>
        </>
    )
}