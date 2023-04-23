import {Link, Route, Routes} from 'react-router-dom';
import './index.scss'
import {MainPageAsync} from "./Pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./Pages/AboutPage/AboutPage.async";
import {Suspense} from "react";

export const App = () => {
    return (
        <div className='app'>
            <Link to='/'>Main</Link>
            <Link to='/about'>About</Link>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path='/' element={<MainPageAsync/>}/>
                        <Route path='/about' element={<AboutPageAsync/>}/>
                    </Routes>
                </Suspense>
        </div>
    )
}