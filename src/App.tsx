import {Link, Route, Routes} from 'react-router-dom';
import {MainPageAsync} from "./Pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./Pages/AboutPage/AboutPage.async";
import {Suspense, useState} from "react";
import './styles/index.scss'

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

export const App = () => {
    const [theme, setTheme] = useState<Theme>(Theme.LIGHT)

    const toggleTheme = () => {
        setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }

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