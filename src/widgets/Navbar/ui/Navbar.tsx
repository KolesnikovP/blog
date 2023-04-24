import React from 'react';
import {Link} from 'react-router-dom';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar)}>
            <Link to='/'>Main</Link>
            <Link to='/about'>About</Link>
        </div>
    );
};

export default Navbar;