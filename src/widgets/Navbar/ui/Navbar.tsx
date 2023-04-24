import React from 'react';
import {Link} from 'react-router-dom';
import {classNames} from 'shared/lib/classNames/classNames';

interface NavbarProps {
    className?: string;
}

const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames('navbar')}>
            <Link to='/'>Main</Link>
            <Link to='/about'>About</Link>
        </div>
    );
};

export default Navbar;