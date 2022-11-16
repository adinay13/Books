import React from 'react';
import s from './header.module.css'

const Header = () => {
    return (
        <div className={s.header}>
            <h1><img src="https://media.tenor.com/R_AvsiBDADsAAAAC/book-monster.gif" alt=""/>Book App</h1>
        </div>
    );
};

export default Header;