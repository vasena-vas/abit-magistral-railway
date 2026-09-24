import React, { useState } from 'react';
import './HowToApply.css';

const HowToApply = () => {
    const [studyType, setStudyType] = useState('budget');

    // Данные для таймлайна БЮДЖЕТ
    const budgetTimelineItems = [
        {
            date: '20 июня',
            title: 'Старт приемной кампании',
            description: 'Для абитуриентов всех форм обучения',
            links: [
                {
                    text: 'Подать документы через Госуслуги →',
                    href: '#'
                },
                {
                    text: 'Видеоинструкция "Как поступить в ВУЗ онлайн?" →',
                    href: 'https://vkvideo.ru/video-73442711_456239768'
                }
            ],
            additionalLink: {
                text: 'Видеоинструкция "Что делать после подачи заявления?" →',
                href: 'https://vkvideo.ru/video-73442711_456239772?t=3m38s'
            },
            color: 'orange',
            hasCircle: true
        },
        {
            date: '20 июля',
            title: 'Завершение приёма документов с прохождением вступительных испытаний',
            countdown: 'Осталось: 0 дней 0 часов 0 минут 0 секунд',
            color: 'orange',
            hasCircle: true
        },
        {
            date: '25 июля',
            time: 'до 15:00 МСК',
            title: 'Завершение приёма документов без прохождения вступительных испытаний',
            countdown: 'Осталось: 0 дней 0 часов 0 минут 0 секунд',
            color: 'orange',
            hasCircle: true,
            showTime: true
        },
        {
            date: '',
            title: 'Завершение Вступительных испытаний',
            color: 'orange',
            hasCircle: false
        },
        {
            date: '27 июля',
            title: 'Публикация ранжированных списков',
            buttonText: 'Совсем скоро здесь появится кнопка',
            color: 'green', // Изменено с blue на green
            hasCircle: true,
            buttonDisabled: true
        },
        {
            date: '01 августа',
            time: 'до 12:00 МСК',
            title: 'Завершение предоставления согласия на зачисление (приоритетный этап)',
            hint: {
                question: true,
                content: 'Приоритетный этап — это поступление в вуз вне конкурса или по льготам. Для поступающих без вступительных испытаний, по особой и отдельной квотам и целевым направлениям.',
                color: 'green'
            },
            countdown: 'Осталось: 0 дней 0 часов 0 минут 0 секунд',
            color: 'green',
            hasCircle: true,
            showTime: true
        },
        {
            date: '03 августа',
            title: 'Издание приказа о зачислении (приоритетный этап)',
            hint: {
                question: true,
                content: 'Приоритетный этап — это поступление в вуз вне конкурса или по льготам. Для поступающих без вступительных испытаний, по особой и отдельной квотам и целевым направлениям.',
                color: 'green'
            },
            buttonText: 'Совсем скоро здесь появится приказ',
            color: 'green',
            hasCircle: true,
            buttonDisabled: true
        },
        {
            date: '05 августа',
            time: 'до 12:00 МСК',
            title: 'Завершение предоставления согласия на зачисление (основной этап)',
            hint: {
                question: true,
                content: 'Основной этап зачисления — это зачисление на бюджетные места, оставшиеся после проведения приоритетного этапа. Для всех остальных абитуриентов, не имеющих преимуществ при поступлении.',
                color: 'orange'
            },
            countdown: 'Осталось: 0 дней 0 часов 0 минут 0 секунд',
            color: 'orange',
            hasCircle: true,
            showTime: true
        },
        {
            date: '07 августа',
            title: 'Издание приказа о зачислении (основной этап)',
            hint: {
                question: true,
                content: 'Основной этап зачисления — это зачисление на бюджетные места, оставшиеся после проведения приоритетного этапа. Для всех остальных абитуриентов, не имеющих преимуществ при поступлении.',
                color: 'orange'
            },
            buttonText: 'Совсем скоро здесь появится приказ',
            color: 'orange',
            hasCircle: true,
            buttonDisabled: true
        }
    ];

    // Данные для таймлайна КОММЕРЦИЯ
    const commerceTimelineItems = [
        {
            date: '20 июня',
            title: 'Старт приемной кампании',
            description: 'Для абитуриентов всех форм обучения',
            links: [
                {
                    text: 'Подать документы через Госуслуги →',
                    href: '#'
                },
                {
                    text: 'Видеоинструкция "Как поступить в ВУЗ онлайн?" →',
                    href: 'https://vkvideo.ru/video-73442711_456239768'
                }
            ],
            additionalLink: {
                text: 'Видеоинструкция "Что делать после подачи заявления?" →',
                href: 'https://vkvideo.ru/video-73442711_456239772?t=3m38s'
            },
            color: 'blue', // Изменено с orange на blue
            hasCircle: true
        },
        {
            date: '15 августа',
            title: 'Завершение приёма документов с прохождением вступительных испытаний',
            countdown: 'Осталось: 0 дней 0 часов 0 минут 0 секунд',
            color: 'blue', // Изменено с orange на blue
            hasCircle: true
        },
        {
            date: '21 августа',
            title: 'Завершение приёма документов без прохождения вступительных испытаний',
            countdown: 'Осталось: 0 дней 0 часов 0 минут 0 секунд',
            color: 'blue', // Изменено с orange на blue
            hasCircle: true
        },
        {
            date: '',
            title: 'Завершение Вступительных испытаний',
            color: 'blue', // Изменено с orange на blue
            hasCircle: false
        },
        {
            date: '24 августа',
            title: 'Публикация ранжированных списков',
            buttonText: 'Совсем скоро здесь появится кнопка',
            color: 'green', // Изменено с blue на green
            hasCircle: true,
            buttonDisabled: true
        },
        {
            date: '29 августа',
            title: 'Завершение заключения договоров на платные места',
            countdown: 'Осталось: 0 дней 0 часов 0 минут 0 секунд',
            color: 'blue', // Изменено с orange на blue
            hasCircle: true
        },
        {
            date: '',
            title: 'Издание приказа о зачислении',
            countdown: 'Осталось: 0 дней 0 часов 0 минут 0 секунд',
            color: 'blue', // Изменено с orange на blue
            hasCircle: false
        }
    ];

    const timelineItems = studyType === 'budget' ? budgetTimelineItems : commerceTimelineItems;

    return (
        <section className="how-to-apply-section">
            <div className="container">
                <div className="apply-header">
                    <h2>Календарь абитуриента</h2>
                    <p>Все важные даты</p>
                </div>

                <div className="study-type-selector">
                    <div className="selector-label">Поступаю на:</div>
                    <div className="study-type-buttons">
                        <button
                            className={`study-type-btn ${studyType === 'budget' ? 'active' : ''}`}
                            onClick={() => setStudyType('budget')}
                        >
                            Бюджет
                        </button>
                        <button
                            className={`study-type-btn ${studyType === 'commerce' ? 'active' : ''}`}
                            onClick={() => setStudyType('commerce')}
                        >
                            Коммерцию
                        </button>
                    </div>
                </div>

                <div className="calendar-timeline">
                    <div className="timeline-line"></div>

                    {timelineItems.map((item, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="timeline-date">
                                <div className={`date-text ${item.color}`}>
                                    {item.date}
                                    {item.showTime && item.time && (
                                        <div className="date-time">{item.time}</div>
                                    )}
                                </div>
                                {item.hasCircle && (
                                    <div className={`date-circle circle-${item.color}`}></div>
                                )}
                            </div>

                            <div className={`timeline-content card-${item.color}`}>
                                <div className="timeline-content-inner">
                                    <div className="title-with-hint">
                                        <h3 className="timeline-title">
                                            {item.title}
                                        </h3>
                                        {item.hint?.question && (
                                            <div
                                                className={`question-icon hint-${item.hint.color || item.color}`}
                                                data-tooltip={item.hint.content}
                                            >
                                                ?
                                            </div>
                                        )}
                                    </div>

                                    {item.description && (
                                        <p className="timeline-description">{item.description}</p>
                                    )}

                                    {item.links && (
                                        <div className="links-container">
                                            <div className="links-row">
                                                <a
                                                    href={item.links[0].href}
                                                    className={`timeline-link ${index === 0 ? 'accent-link' : ''}`}
                                                >
                                                    {item.links[0].text}
                                                </a>
                                                {item.links[1] && (
                                                    <a
                                                        href={item.links[1].href}
                                                        className="timeline-link"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {item.links[1].text}
                                                    </a>
                                                )}
                                            </div>
                                            {item.additionalLink && (
                                                <a
                                                    href={item.additionalLink.href}
                                                    className="timeline-link additional-link"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {item.additionalLink.text}
                                                </a>
                                            )}
                                        </div>
                                    )}

                                    {item.buttonText && (
                                        <button
                                            className={`disabled-button button-${item.color}`}
                                            disabled={item.buttonDisabled}
                                        >
                                            {item.buttonText}
                                        </button>
                                    )}

                                    {item.countdown && (
                                        <div className="countdown-timer">{item.countdown}</div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowToApply;
