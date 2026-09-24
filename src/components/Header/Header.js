import React, { useState } from 'react';
import './Header.css';

const Header = ({ onMenuToggle, isMenuOpen }) => {
    return (
        <header className="header">
            {/* Мобильный заголовок */}
            <div className="header-mobile">
                <div className="mobile-header-content">
                    <img
                        src="/images/logo-mini.png"
                        alt="МГТУ им. Г.И. Носова"
                        className="mobile-logo"
                    />
                    <button
                        className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
                        onClick={onMenuToggle}
                        aria-label="Меню"
                    >
                        <div className="menu-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Десктопный заголовок */}
            <div className="header-top">
                <div className="header-content">
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="поиск по сайту"
                            className="search-input"
                        />
                    </div>
                    <div className="header-contact">
                        <span className="hotline">Горячая линия: 8 (800) 100-19-34</span>
                        <span className="email">e-mail: tutmailabit@magtu.ru</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
