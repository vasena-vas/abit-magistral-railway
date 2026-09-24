import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-main">
                    <div className="university-info">
                        <div className="university-logo">
                            <img src={process.env.PUBLIC_URL + "/images/logo.svg"} alt="МГТУ им. Г.И. Носова" className="logo-image" />
                        </div>
                        <div className="university-details">
                            <p className="description">
                                Один из ведущих технических университетов России с 90-летней историей
                                качественного образования и инновационных исследований.
                            </p>
                            <div className="contact-info">
                                <p className="address">450000, г. Магнитогорск, пр. Ленина, 38</p>
                                <p className="phone">8 (800) 100-19-34</p>
                                <p className="email">info@magtu.ru</p>
                            </div>
                        </div>
                    </div>

                    <div className="footer-sections">
                        <div className="footer-section">
                            <h4>Быстрые ссылки</h4>
                            <ul>
                                <li>Правила приема</li>
                                <li>Конкурсные списки</li>
                                <li>Целевое обучение</li>
                                <li>Списки на зачисление</li>
                            </ul>

                            <h4>Полезные сервисы</h4>
                            <ul>
                                <li>Сервис 1</li>
                                <li>Сервис 2</li>
                                <li>Сервис 3</li>
                                <li>Сервис 4</li>
                            </ul>
                        </div>

                        <div className="footer-section">
                            <h4>Наши институты</h4>
                            <ul>
                                <li>Институт металлургии, машиностроения и материаловедения</li>
                                <li>Институт энергетики и автоматизированных систем</li>
                                <li><strong>Институт горного дела и транспорта</strong></li>
                                <li>Институт экономики и управления</li>
                                <li>Институт строительства, архитектуры и искусства</li>
                                <li>Институт естествознания и стандартизации</li>
                                <li>Институт гуманитарного образования</li>
                                <li>Факультет физической культуры и спортивного мастерства</li>
                                <li>Многопрофильный колледж</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
