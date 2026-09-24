import React from 'react';
import './AdmissionStats.css';

const AdmissionStats = () => {
    const stats = [
        {
            value: "245",
            title: "проходной балл",
            description: "Средний балл зачисленных в прошлом году",
            color: "#F54A00"
        },
        {
            value: "180",
            title: "колличество заявлений",
            description: "подано в прошлом году",
            color: "#8BA474"
        },
        {
            value: "5.1",
            title: "конкурс",
            description: "человек на место",
            color: "#323C8D"
        }
    ];

    const directions = [
        {
            title: "Промышленный транспорт",
            items: [
                { value: "25", label: "Бюджетных мест" },
                { value: "15", label: "Платных мест" },
                { value: "5", label: "Целевых мест" },
                { value: "3", label: "Особая карта" },
                { value: "3", label: "Отдельная карта" }
            ]
        }
    ];

    return (
        <section className="admission-stats-section">
            {/* Статистика поступления */}
            <div className="stats-block">
                <h2 className="stats-section-title">Статистика поступления за последний год</h2>

                <div className="stats-main-container">
                    <div className="stats-content-wrapper">
                        {/* Цифры с текстом сразу справа */}
                        <div className="stats-grid-layout">
                            {stats.map((stat, index) => (
                                <div key={index} className="stats-grid-item">
                                    <div className="stats-grid-number" style={{ color: stat.color }}>
                                        {stat.value}
                                    </div>
                                    <div className="stats-text-container">
                                        <div className="stats-grid-title" style={{ color: stat.color }}>
                                            {stat.title}
                                        </div>
                                        <div className="stats-grid-desc">{stat.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Карточка соцсетей */}
                        <div className="stats-social-container">
                            <div className="stats-social-card">
                                <div className="stats-social-label">Направление в соцсетях:</div>
                                <div className="stats-social-buttons">
                                    <button className="stats-social-btn">Кафедра →</button>
                                    <button className="stats-social-btn">Институт →</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Направления подготовки */}
            <div className="stats-directions-block">
                <h2 className="stats-section-title">Направления подготовки</h2>

                <div className="stats-directions-container">
                    <div className="stats-direction-card">
                        {/* ВСЕ В ОДНУ ЛИНИЮ */}
                        <div className="stats-direction-line">
                            <div className="stats-direction-title-container">
                                <h3 className="stats-direction-title">Промышленный транспорт</h3>
                            </div>

                            {directions[0].items.map((item, index) => (
                                <div key={index} className="stats-place-item">
                                    <div className="stats-place-value">{item.value}</div>
                                    <div className="stats-place-label">{item.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdmissionStats;
