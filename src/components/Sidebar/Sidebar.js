import React, { useEffect, useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    return (
        <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="sidebar-content">
                <div className="university-logo">
                    {/* ВСЕГДА показываем основное лого, независимо от устройства */}
                    <img
                        src="/images/sidebar/logo.svg"
                        alt="МГТУ им. Г.И. Носова"
                        className="logo-image"
                    />
                    {/* Крестик для закрытия меню на мобильных */}
                    {isMobile && (
                        <button
                            className="sidebar-close"
                            onClick={onClose}
                            aria-label="Закрыть меню"
                        >
                            ×
                        </button>
                    )}
                </div>

                <nav className="sidebar-nav">
                    <div className="nav-section education-level">
                        <h3>Уровень образования</h3>
                        <ul>
                            <li>
                                <img src={process.env.PUBLIC_URL + "/images/sidebar/one.png"} alt="" className="icon" />
                                Подготовка к поступлению
                            </li>
                            <li>
                                <img src={process.env.PUBLIC_URL + "/images/sidebar/one.png"} alt="" className="icon" />
                                Проектная школа
                            </li>
                            <li>
                                <img src={process.env.PUBLIC_URL + "/images/sidebar/one.png"} alt="" className="icon" />
                                Колледж
                            </li>
                            <li>
                                <img src={process.env.PUBLIC_URL + "/images/sidebar/one.png"} alt="" className="icon" />
                                Бакалавриат/Специалитет
                            </li>
                            <li>
                                <img src={process.env.PUBLIC_URL + "/images/sidebar/one.png"} alt="" className="icon" />
                                Магистратура
                            </li>
                            <li>
                                <img src={process.env.PUBLIC_URL + "/images/sidebar/one.png"} alt="" className="icon" />
                                Аспирантура
                            </li>
                        </ul>
                    </div>

                    <div className="nav-section additional">
                        <h3>Дополнительно</h3>
                        <ul>
                            <li>
                                <img src={process.env.PUBLIC_URL + "/images/sidebar/two.png"} alt="" className="icon" />
                                Правила приема
                            </li>
                            <li>
                                <img src={process.env.PUBLIC_URL + "/images/sidebar/two.png"} alt="" className="icon" />
                                Конкурсные списки
                            </li>
                            <li>
                                <img src={process.env.PUBLIC_URL + "/images/sidebar/two.png"} alt="" className="icon" />
                                Целевое обучение
                            </li>
                            <li>
                                <img src={process.env.PUBLIC_URL + "/images/sidebar/two.png"} alt="" className="icon" />
                                Списки на зачисление
                            </li>
                        </ul>
                    </div>

                    <div className="nav-section submission-methods">
                        <h3>Способы подачи</h3>
                        <ul>
                            <li>
                                <img src={process.env.PUBLIC_URL + "/images/sidebar/three.png"} alt="" className="icon" />
                                Госуслуги
                            </li>
                            <li>
                                <img src={process.env.PUBLIC_URL + "/images/sidebar/three.png"} alt="" className="icon" />
                                Почта России
                            </li>
                            <li>
                                <img src={process.env.PUBLIC_URL + "/images/sidebar/three.png"} alt="" className="icon" />
                                Предварительная запись на очный прием
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;
