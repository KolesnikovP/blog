import {Link, Route, Routes} from 'react-router-dom';
import {MainPageAsync} from "./Pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./Pages/AboutPage/AboutPage.async";
import {Suspense, useContext, useState} from "react";
import './styles/index.scss'
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";

export const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>toggle</button>
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