import React from 'react';
import './ProgramHeader.css';


const ProgramHeader = () => {
    return (
        <section className="program-header">
            <div className="breadcrumbs">
                <span className="breadcrumb-item">Главная</span>
                <span className="breadcrumb-separator">></span>
                <span className="breadcrumb-item">Бакалавриат/Специалитет</span>
                <span className="breadcrumb-separator">></span>
                <span className="breadcrumb-item">Направления подготовки</span>
                <span className="breadcrumb-separator">></span>
                <span className="breadcrumb-item active">23.05.04 Эксплуатация железных дорог</span>
            </div>

            <div className="program-main-info">
                <h1>23.05.04 Эксплуатация железных дорог</h1>
                <div className="program-details">
                    <div className="detail-item">
                        <div className="icon-wrapper">
                            <img src={process.env.PUBLIC_URL + "/images/icons/clock-icon.png"} alt="Срок обучения" className="icon" />
                        </div>
                        <span className="detail-text">Срок обучения: 5 лет</span>
                    </div>
                    <div className="detail-item">
                        <div className="icon-wrapper">
                            <img src={process.env.PUBLIC_URL + "/images/icons/institute-icon.png"} alt="Институт" className="icon" />
                        </div>
                        <span className="detail-text">Институт/факультет: Институт горного дела и транспорта</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgramHeader;
