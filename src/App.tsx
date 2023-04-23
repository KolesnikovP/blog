import {Counter} from "./Counter/Counter";
import {Link, Route, Routes} from 'react-router-dom';
import './index.scss'
import MainPage from "./Pages/MainPage/MainPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import path from "path";

export const App = () => {
    return (
        <div className='app'>
            <Link to='/'>Main</Link>
            <Link to='/about'>About</Link>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
            </Routes>
        </div>
    )
}