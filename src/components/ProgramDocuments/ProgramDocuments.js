import React from 'react';
import './ProgramDocuments.css';

const ProgramDocuments = () => {
    const document1Image = '/images/documents/document1.png';
    const document2Image = '/images/documents/document2.png';

    return (
        <>
            <div className="documents-section">
                <div className="documents-section-container"> {/* Добавленный контейнер */}
                    <div className="documents-grid">
                        {/* Первая карточка - оранжевая тема */}
                        <div className="document-item">
                            <div className="document-content">
                                <h3>Учебный план</h3>
                                <p>Подробная программа обучения по курсам</p>
                                <button className="document-btn">
                                    <span>Скачать учебный план</span>
                                </button>
                            </div>
                            <div className="document-image"
                                 style={{ backgroundImage: `url(${document1Image})` }}>
                            </div>
                        </div>

                        {/* Вторая карточка - синяя тема */}
                        <div className="document-item">
                            <div className="document-content">
                                <h3>Программа Вступительных испытаний</h3>
                                <button className="document-btn">
                                    <span>Изучить программу ВИ</span>
                                </button>
                            </div>
                            <div className="document-image"
                                 style={{ backgroundImage: `url(${document2Image})` }}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProgramDocuments;
