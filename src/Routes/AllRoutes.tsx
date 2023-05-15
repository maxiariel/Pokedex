import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import Card from "../components/card/Card";


export default function AllRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/:id" element={<Card/>}/>
            </Routes>
        </BrowserRouter>
    )
}