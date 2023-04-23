import {Link, Route, Routes} from 'react-router-dom';
import {MainPageAsync} from "./Pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./Pages/AboutPage/AboutPage.async";
import {Suspense} from "react";
import './styles/index.scss'
import {useTheme} from "./theme/useTheme";
import {classNames} from "./styles/helpers/classNames/classNames";

export const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
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