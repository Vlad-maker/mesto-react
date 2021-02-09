import React from 'react';
import logo from '../img/logo.svg';
export default function Header() {
    return (
        <header className="header page__header">
            <img className="header__logo" src={logo} alt="Логотип" />
        </header>
    );
}