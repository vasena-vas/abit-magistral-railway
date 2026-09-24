import React from 'react';
import './SuccessStories.css';

const SuccessStories = () => {
    const stories = [
        {
            id: 1,
            name: "Алексей Морозов",
            age: "27 лет",
            position: "Начальник станции",
            company: "РЖД, Московская железная дорога",
            graduation: "Выпуск 2019",
            story: "После выпуска сразу попал на стажировку в РЖД. За 4 года прошел путь от дежурного по станции до начальника. Работа динамичная, каждый день новые вызовы. Зарплата позволяет содержать семью и строить планы на будущее.",
            color: "orange",
            bgColor: "rgba(255, 247, 237, 1)"
        },
        {
            id: 2,
            name: "Мария Волкова",
            age: "25 лет",
            position: "Инженер-диспетчер",
            company: "Московский метрополитен",
            graduation: "Выпуск 2020",
            story: "Мечтала работать в метро с детства. Специальность дала все необходимые знания. Сейчас управляю движением поездов на Сокольнической линии. Ответственная работа, но очень интересная. Есть возможность для карьерного роста.",
            color: "blue",
            bgColor: "rgba(244, 244, 248, 1)"
        },
        {
            id: 3,
            name: "Дмитрий Козлов",
            age: "28 лет",
            position: "Ведущий специалист по логистике",
            company: "ПАО «ММК»",
            graduation: "Выпуск 2018",
            story: "Поступил на железнодорожную специальность, а работаю в металлургии. Знания по логистике и транспорту оказались очень востребованы. Занимаюсь оптимизацией грузоперевозок, участвую в цифровизации процессов.",
            color: "green",
            bgColor: "rgba(248, 249, 247, 1)"
        }
    ];

    return (
        <section className="success-stories">
            <h1>Истории успеха наших выпускников</h1>

            <div className="stories-grid">
                {stories.map((story) => (
                    <div key={story.id} className={`story-card ${story.color}`} style={{backgroundColor: story.bgColor}}>
                        <div className="photo-placeholder">
                            <div className="photo-frame">
                                <span className="photo-text">Фото</span>
                            </div>
                        </div>
                        <div className="story-content">
                            <h3 className="story-name">{story.name}</h3>
                            <p className="story-age">{story.age}</p>
                            <p className="position">{story.position}</p>
                            <p className="company">{story.company}</p>
                            <p className="graduation">{story.graduation}</p>
                            <div className="story-spacer"></div>
                            <p className="story-text">{story.story}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SuccessStories;
