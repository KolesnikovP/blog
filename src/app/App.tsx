import {Link, Route, Routes} from 'react-router-dom';
import {Suspense} from "react";
import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {MainPage} from 'pages/MainPage';
import {AboutPage} from 'pages/AboutPage';

export const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>toggle</button>
            <Link to='/'>Main</Link>
            <Link to='/about'>About</Link>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path='/' element={<MainPage/>}/>
                        <Route path='/about' element={<AboutPage/>}/>
                    </Routes>
                </Suspense>
        </div>
    )
}