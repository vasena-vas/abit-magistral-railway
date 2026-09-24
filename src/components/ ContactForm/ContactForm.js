import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        contact: ''
    });

    const [agreements, setAgreements] = useState({
        policy: false,
        personalData: false
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleAgreementChange = (e) => {
        setAgreements({
            ...agreements,
            [e.target.name]: e.target.checked
        });
    };

    return (
        <div className="contact-container">
            <div className="contact-header">
                <h2>Остались вопросы?</h2>
                <p>Наши специалисты готовы помочь вам с выбором направления и ответить на все вопросы о поступлении</p>
            </div>

            <section className="contact-section">
                <h3>Напишите нам</h3>

                <div className="form-main-row">
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Ваше Имя"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name="contact"
                            placeholder="Номер телефона/почта"
                            value={formData.contact}
                            onChange={handleChange}
                        />
                    </div>

                    <button className="submit-btn">Подать заявку</button>
                    <button className="whatsapp-btn">Написать в MAX</button>
                </div>

                <div className="form-checkboxes">
                    <label className="checkbox-label">
                        <input
                            type="checkbox"
                            name="policy"
                            checked={agreements.policy}
                            onChange={handleAgreementChange}
                        />
                        <span className="checkmark"></span>
                        <span className="checkbox-text">
                            Я подтверждаю ознакомление с Политикой обработки и защиты персональных данных и Политикой конфиденциальности.
                        </span>
                    </label>
                    <label className="checkbox-label">
                        <input
                            type="checkbox"
                            name="personalData"
                            checked={agreements.personalData}
                            onChange={handleAgreementChange}
                        />
                        <span className="checkmark"></span>
                        <span className="checkbox-text">
                            Я согласен с Политикой обработки и Политикой конфиденциальности, а также даю согласие на обработку моих персональных данных согласно ФЗ №152-ФЗ.
                        </span>
                    </label>
                </div>
            </section>
        </div>
    );
};

export default ContactForm;
