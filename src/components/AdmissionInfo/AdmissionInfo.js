import React, { useState } from 'react';
import './AdmissionInfo.css';

const AdmissionInfo = () => {
    const [activeTab, setActiveTab] = useState('school');

    // Данные для вкладки "После школы"
    const schoolData = {
        fullTime: {
            title: "Очная форма обучения",
            budgetPlaces: 25,
            paidPlaces: 10,
            cost: "170 000",
            costNote: "Стоимость указана за прошлый учебный год. Стоимость на новый учебный год будет опубликована в июне."
        },
        partTime: {
            title: "Заочная форма обучения",
            budgetPlaces: 0,
            paidPlaces: 35,
            cost: "77 000",
            costNote: "Стоимость указана за прошлый учебный год. Стоимость на новый учебный год будет опубликована в июне."
        },
        requirements: [
            { subject: "Математика (профильная)", minScore: 39 },
            { subject: "Физика", minScore: 39 },
            { subject: "Русский язык", minScore: 40 }
        ],
        note: "Вместо физики можно сдать:",
        noteHighlight: "Информатику и ИКТ"
    };

    // Данные для вкладки "После колледжа"
    const collegeData = {
        fullTime: {
            title: "Очная форма обучения",
            budgetPlaces: 15,
            paidPlaces: 15,
            cost: "150 000",
            costNote: "Стоимость указана за прошлый учебный год. Стоимость на новый учебный год будет опубликована в июне."
        },
        partTime: {
            title: "Заочная форма обучения",
            budgetPlaces: 0,
            paidPlaces: 40,
            cost: "70 000",
            costNote: "Стоимость указана за прошлый учебный год. Стоимость на новый учебный год будет опубликована в июне."
        },
        entranceExams: [
            { subject: "Математика", minScore: 35 },
            { subject: "Физика", minScore: 35 },
            { subject: "Русский язык", minScore: 40 }
        ],
        note: "Дополнительная информация:",
        noteHighlight: "Экзамены проводятся в устной и письменной форме"
    };

    const data = activeTab === 'school' ? schoolData : collegeData;

    // Контент для всплывающих подсказок
    const tooltipContents = {
        fullTime: "Очная форма обучения предполагает ежедневное посещение занятий в университете в течение всего учебного дня. Студенты полностью погружаются в учебный процесс, участвуют в практических занятиях и имеют доступ ко всем ресурсам вуза.",
        partTime: "Заочная форма обучения сочетает работу и учебу. Основная часть материала изучается самостоятельно, а в университете проходят установочные и экзаменационные сессии несколько раз в год. Идеально подходит для работающих студентов.",
        admission: "Выберите способ поступления: через ЕГЭ (для выпускников школ) или через вступительные экзамены (для выпускников колледжей и техникумов)."
    };

    return (
        <section className="admission-section">
            <div className="container">
                {/* Заголовок и кнопки */}
                <div className="admission-header-wrapper">
                    <div className="admission-header">
                        <div className="title-with-tooltip">
                            <div
                                className="question-icon header-question"
                                data-tooltip={tooltipContents.admission}
                            >
                                ?
                            </div>
                            <h2 className="section-title">Поступление по:</h2>
                        </div>
                        <div className="tabs-container">
                            <button
                                className={`tab-button ${activeTab === 'school' ? 'active' : ''}`}
                                onClick={() => setActiveTab('school')}
                            >
                                ЕГЭ
                            </button>
                            <button
                                className={`tab-button ${activeTab === 'college' ? 'active' : ''}`}
                                onClick={() => setActiveTab('college')}
                            >
                                Внутренним вступительным испытаниям
                            </button>
                        </div>
                    </div>
                </div>

                {/* Основные блоки */}
                <div className="admission-grid">
                    {/* Левый столбец: очная и заочная формы */}
                    <div className="forms-column">
                        {/* Очная форма */}
                        <div className="form-card full-time">
                            <div className="form-header">
                                <div className="form-title-wrapper">
                                    <h3 className="form-title">{data.fullTime.title}</h3>
                                    <div
                                        className="question-icon full-time-question"
                                        data-tooltip={tooltipContents.fullTime}
                                    >
                                        ?
                                    </div>
                                </div>
                            </div>

                            <div className="form-stats-row">
                                <div className="stat-item">
                                    <div className="stat-number">{data.fullTime.budgetPlaces}</div>
                                    <div className="stat-label">Бюджетных мест</div>
                                </div>

                                <div className="stat-divider"></div>

                                <div className="stat-item">
                                    <div className="stat-number">{data.fullTime.paidPlaces}</div>
                                    <div className="stat-label">Платных мест</div>
                                </div>

                                <div className="stat-divider"></div>

                                <div className="stat-item">
                                    <div className="cost-wrapper">
                                        <div
                                            className="stat-number cost-with-tooltip"
                                            data-tooltip={data.fullTime.costNote}
                                        >
                                            {data.fullTime.cost} ₽
                                        </div>
                                        <div
                                            className="exclamation-icon"
                                            data-tooltip={data.fullTime.costNote}
                                        >
                                            !
                                        </div>
                                    </div>
                                    <div className="stat-label">Стоимость /год</div>
                                </div>
                            </div>
                        </div>

                        {/* Заочная форма */}
                        <div className="form-card part-time">
                            <div className="form-header">
                                <div className="form-title-wrapper">
                                    <h3 className="form-title">{data.partTime.title}</h3>
                                    <div
                                        className="question-icon part-time-question"
                                        data-tooltip={tooltipContents.partTime}
                                    >
                                        ?
                                    </div>
                                </div>
                            </div>

                            <div className="form-stats-row">
                                <div className="stat-item">
                                    <div className="stat-number">{data.partTime.budgetPlaces}</div>
                                    <div className="stat-label">Бюджетных мест</div>
                                </div>

                                <div className="stat-divider"></div>

                                <div className="stat-item">
                                    <div className="stat-number">{data.partTime.paidPlaces}</div>
                                    <div className="stat-label">Платных мест</div>
                                </div>

                                <div className="stat-divider"></div>

                                <div className="stat-item">
                                    <div className="cost-wrapper">
                                        <div
                                            className="stat-number cost-with-tooltip"
                                            data-tooltip={data.partTime.costNote}
                                        >
                                            {data.partTime.cost} ₽
                                        </div>
                                        <div
                                            className="exclamation-icon"
                                            data-tooltip={data.partTime.costNote}
                                        >
                                            !
                                        </div>
                                    </div>
                                    <div className="stat-label">Стоимость /год</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Правый столбец: требования к ЕГЭ или вступительные экзамены */}
                    <div className="requirements-column">
                        <div className="requirements-card">
                            <h3 className="requirements-title">
                                {activeTab === 'school' ? 'Требования ЕГЭ' : 'Вступительные экзамены'}
                            </h3>

                            <div className="requirements-list">
                                <div className="requirement-divider"></div>

                                {activeTab === 'school' ? (
                                    data.requirements.map((req, index) => (
                                        <React.Fragment key={index}>
                                            <div className="requirement-item">
                                                <div className="subject">{req.subject}</div>
                                                <div className={`min-score-card score-${index}`}>
                                                    от {req.minScore} баллов
                                                </div>
                                            </div>
                                            <div className="requirement-divider"></div>
                                        </React.Fragment>
                                    ))
                                ) : (
                                    data.entranceExams.map((exam, index) => (
                                        <React.Fragment key={index}>
                                            <div className="requirement-item">
                                                <div className="subject">{exam.subject}</div>
                                                <div className={`min-score-card score-${index}`}>
                                                    от {exam.minScore} баллов
                                                </div>
                                            </div>
                                            <div className="requirement-divider"></div>
                                        </React.Fragment>
                                    ))
                                )}
                            </div>

                            {/* Блок "Важно" */}
                            <div className="important-note">
                                <div className="note-label">ВАЖНО</div>
                                <div className="note-content">
                                    <p className="note-text">{data.note}</p>
                                    <p className="note-highlight">{data.noteHighlight}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdmissionInfo;
