import React from 'react';
import './ ProgramPartners.css';

const ProgramPartners = () => {
    // Партнеры с SVG логотипами (используем .png если SVG нет)
    const partners = [
        {
            id: 1,
            name: 'МАГНИТОГОРСКИЙ МЕТАЛЛУРГИЧЕСКИЙ КОМБИНАТ',
            logo: '/images/partners/partner1.png',
            logoWhite: '/images/partners/partner1.png',
            shortName: 'ММК'
        },
        {
            id: 2,
            name: 'ЦЕН',
            logo: '/images/partners/partner2.png',
            logoWhite: '/images/partners/partner2.png',
            shortName: 'ЦЕН'
        },
        {
            id: 3,
            name: 'СТАЛЬ МАЙК-МЕТИЗ',
            logo: '/images/partners/partner3.png',
            logoWhite: '/images/partners/partner3.png',
            shortName: 'МАЙК-МЕТИЗ'
        },
        {
            id: 4,
            name: 'МЭТМ',
            logo: '/images/partners/partner4.png',
            logoWhite: '/images/partners/partner4.png',
            shortName: 'МЭТМ'
        },
        {
            id: 5,
            name: 'МЭТМ',
            logo: '/images/partners/partner5.png',
            logoWhite: '/images/partners/partner5.png',
            shortName: 'Андроидная техника'
        },
    ];

    // Создаем массив с дублированием для бесконечной прокрутки
    const duplicatedPartners = [...partners, ...partners];

    return (
        <>
            <div className="partners-section">


                <div className="partners-container">
                    <div className="partners-header">
                        <h3 className="partners-title">Партнёры программы:</h3>

                        <div className="partners-carousel-wrapper">
                            <div className="fade-overlay-left"></div>

                            <div className="partners-carousel">
                                <div className="partners-track">
                                    {/* Основные логотипы */}
                                    {duplicatedPartners.map((partner, index) => (
                                        <img
                                            key={`${partner.id}-${index}`}
                                            src={partner.logo}
                                            alt={partner.name}
                                            className="partner-logo colored-logo"
                                            onError={(e) => {
                                                // Fallback на короткое название если нет SVG
                                                e.target.style.display = 'none';
                                                const parent = e.target.parentElement;
                                                if (!parent.querySelector('.logo-fallback')) {
                                                    const fallback = document.createElement('div');
                                                    fallback.className = 'logo-fallback';
                                                    fallback.textContent = partner.shortName;
                                                    fallback.style.cssText = `
                                                        display: flex;
                                                        align-items: center;
                                                        justify-content: center;
                                                        height: 60px;
                                                        min-width: 150px;
                                                        background-color: #f8f9fa;
                                                        border-radius: 8px;
                                                        color: #8BA474;
                                                        font-weight: 600;
                                                        font-size: 14px;
                                                        padding: 0 20px;
                                                        margin: 0 40px;
                                                        white-space: nowrap;
                                                    `;
                                                    parent.appendChild(fallback);
                                                }
                                            }}
                                            loading="lazy"
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="fade-overlay-right"></div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
};

export default ProgramPartners;
