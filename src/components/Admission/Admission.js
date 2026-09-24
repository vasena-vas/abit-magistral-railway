import React, { useState } from 'react';
import './Admission.css';

const Admission = () => {
    const [scores, setScores] = useState({
        math: '',
        physics: '',
        biology: '',
        additional: ''
    });

    const [errors, setErrors] = useState({
        math: false,
        physics: false,
        biology: false,
        additional: false
    });

    // Данные для подсказки о доп баллах
    const additionalPointsTooltip = "Количество дополнительных баллов можно узнать в личном кабинете абитуриента. К ним относятся баллы за индивидуальные достижения (аттестат с отличием, волонтерство, спортивные достижения и т.д.). Максимальное количество дополнительных баллов - 10.";

    const handleScoreChange = (subject, value) => {
        // Удаляем все нецифровые символы
        const cleanedValue = value.replace(/[^\d]/g, '');

        // Проверяем, что значение является числом
        const numValue = parseInt(cleanedValue);

        // Проверка на максимальное значение
        let newValue = cleanedValue;
        let hasError = false;

        if (cleanedValue !== '') {
            const maxValue = subject === 'additional' ? 10 : 100;

            if (numValue > maxValue) {
                newValue = maxValue.toString();
                hasError = true;
            } else if (numValue < 0) {
                newValue = '0';
                hasError = true;
            }
        }

        setScores(prev => ({
            ...prev,
            [subject]: newValue
        }));

        setErrors(prev => ({
            ...prev,
            [subject]: hasError
        }));
    };

    const handleBlur = (subject) => {
        const value = scores[subject];
        if (value === '' || parseInt(value) < 0) {
            setScores(prev => ({
                ...prev,
                [subject]: '0'
            }));
        }
    };

    const calculateTotal = () => {
        const mathScore = parseInt(scores.math) || 0;
        const physicsScore = parseInt(scores.physics) || 0;
        const biologyScore = parseInt(scores.biology) || 0;
        const additionalScore = parseInt(scores.additional) || 0;

        return mathScore + physicsScore + biologyScore + additionalScore;
    };

    const totalScore = calculateTotal();
    const chancePercentage = Math.min(100, Math.max(0, (totalScore / 300) * 100));
    const chanceText = totalScore >= 200 ? 'Высокий' : totalScore >= 150 ? 'Средний' : 'Низкий';

    return (
        <section className="admission-section">
            <div className="calculator-card blue">
                <h1>Калькулятор шансов поступления</h1>

                <div className="subjects-grid">
                    <div className="subject-card">
                        <div className="subject-info">
                            <span className="subject-name">МАТЕМАТИКА (ПРОФ.)</span>
                            <div className="min-score-container">
                                <span className="min-score-label">Минимальный балл:</span>
                                <span className="min-score-value">42</span>
                            </div>
                            {errors.math && (
                                <span className="error-message">Максимум 100 баллов</span>
                            )}
                        </div>
                        <div className="score-input-wrapper">
                            <input
                                type="number"
                                className={`score-input ${errors.math ? 'error' : ''}`}
                                placeholder="0"
                                value={scores.math}
                                onChange={(e) => handleScoreChange('math', e.target.value)}
                                onBlur={() => handleBlur('math')}
                                min="0"
                                max="100"
                            />
                        </div>
                    </div>
                    <div className="subject-card">
                        <div className="subject-info">
                            <span className="subject-name">ФИЗИКА/ ИНФОРМАТИКА</span>
                            <div className="min-score-container">
                                <span className="min-score-label">Минимальный балл:</span>
                                <span className="min-score-value">42</span>
                            </div>
                            {errors.physics && (
                                <span className="error-message">Максимум 100 баллов</span>
                            )}
                        </div>
                        <div className="score-input-wrapper">
                            <input
                                type="number"
                                className={`score-input ${errors.physics ? 'error' : ''}`}
                                placeholder="0"
                                value={scores.physics}
                                onChange={(e) => handleScoreChange('physics', e.target.value)}
                                onBlur={() => handleBlur('physics')}
                                min="0"
                                max="100"
                            />
                        </div>
                    </div>
                    <div className="subject-card">
                        <div className="subject-info">
                            <span className="subject-name">БИОЛОГИЯ</span>
                            <div className="min-score-container">
                                <span className="min-score-label">Минимальный балл:</span>
                                <span className="min-score-value">42</span>
                            </div>
                            {errors.biology && (
                                <span className="error-message">Максимум 100 баллов</span>
                            )}
                        </div>
                        <div className="score-input-wrapper">
                            <input
                                type="number"
                                className={`score-input ${errors.biology ? 'error' : ''}`}
                                placeholder="0"
                                value={scores.biology}
                                onChange={(e) => handleScoreChange('biology', e.target.value)}
                                onBlur={() => handleBlur('biology')}
                                min="0"
                                max="100"
                            />
                        </div>
                    </div>
                    <div className="subject-card green">
                        <div className="subject-info">
                            <div className="subject-title-with-hint">
                                <span className="subject-name">ДОП. БАЛЛЫ</span>
                                <div
                                    className="question-icon hint-green"
                                    data-tooltip={additionalPointsTooltip}
                                >
                                    ?
                                </div>
                            </div>
                            <div className="min-score-container">
                                <span className="min-score-label">Максимальный балл:</span>
                                <span className="min-score-value">10</span>
                            </div>
                            {errors.additional && (
                                <span className="error-message">Максимум 10 баллов</span>
                            )}
                        </div>
                        <div className="score-input-wrapper">
                            <input
                                type="number"
                                className={`score-input ${errors.additional ? 'error' : ''}`}
                                placeholder="0"
                                value={scores.additional}
                                onChange={(e) => handleScoreChange('additional', e.target.value)}
                                onBlur={() => handleBlur('additional')}
                                min="0"
                                max="10"
                            />
                        </div>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="results-section">
                    <div className="results-horizontal-line">
                        <div className="result-combined">
                            <span className="result-label">Сумма баллов:</span>
                            <span className="result-value">{totalScore}</span>
                            <span className="result-label">Шанс поступления на бюджет:</span>
                            <span className="result-percentage">{chancePercentage.toFixed(0)}%</span>
                            <span className="result-chance">{chanceText}</span>
                        </div>
                    </div>

                    <div className="action-buttons">
                        <button className="apply-now-btn">Подать заявление сейчас →</button>
                        <button className="ask-question-btn">Задать вопрос</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Admission;
