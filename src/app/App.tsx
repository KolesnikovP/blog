import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from 'app/router';
import {Navbar} from 'widgets/Navbar';
import {Sidebar} from 'widgets/Sidebar';
import {useTranslation} from 'react-i18next';
import {Suspense} from 'react';
import './styles/index.scss'

export const App = () => {
    const {theme} = useTheme();

    const {t} = useTranslation()

    return (
        <div className={classNames('app', {}, [theme])}>
        <Suspense fallback='...'>
            <Navbar/>
            <div className='content-page'>
                <Sidebar/>
                <AppRouter/>
            </div>
        </Suspense>
        </div>
    )
}