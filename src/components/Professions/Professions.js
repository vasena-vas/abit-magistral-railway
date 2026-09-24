import React from 'react';
import './Professions.css';

const Professions = () => {
    const professions = [
        {
            id: 1,
            title: 'Инженер путевого хозяйства',
            salary: '65 000',
            workplace: 'РЖД, региональные филиалы',
            // Убрали иконки
        },
        {
            id: 2,
            title: 'Диспетчер поездов',
            salary: '70 000',
            workplace: 'Диспетчерские центры',
            // Убрали иконки
        },
        {
            id: 3,
            title: 'Специалист по эксплуатации станций',
            salary: '60 000',
            workplace: 'Железнодорожные станции',
            // Убрали иконки
        },
        {
            id: 4,
            title: 'Инженер путевого хозяйства',
            salary: '55 000',
            workplace: 'Служба сигнализации и связи',
            // Убрали иконки
        }
    ];

    return (
        <div className="professions-section">
            <h1>Кем ты будешь с дипломом в руках?</h1>
            <div className="professions-grid">
                {professions.map((profession) => (
                    <div key={profession.id} className="profession-card">
                        {/* Убрали блок с иконкой */}
                        <h3>{profession.title}</h3>
                        <p className="salary">3П: от {profession.salary} руб.</p>
                        <p className="workplace">{profession.workplace}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Professions;
