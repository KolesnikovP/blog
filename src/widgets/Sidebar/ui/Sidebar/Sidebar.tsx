import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import React, {useState} from 'react';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';
import {LangSwitcher} from 'widgets/LangSwitcher';

interface SidebarProps {
    className?: string;
}

const Sidebar = (props: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)

    const {className} = props

    const onToggle = () => {
        setCollapsed(prevState => !prevState)
    }
    
    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [])}>
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.LangSwitcher}/>
            </div>
        </div>
    );
};

export default Sidebar;