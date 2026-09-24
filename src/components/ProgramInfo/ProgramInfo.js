import React, { useState, useRef } from 'react';
import './ProgramInfo.css';

const ProgramInfo = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleVideoEnd = () => {
        setIsPlaying(false);
    };

    return (
        <section className="program-section">
            <div className="program-content-wrapper">
                <div className="program-header">
                    <h1>О программе</h1>
                </div>

                <div className="program-content">
                    <p>
                        Вы узнаете о железнодорожных станциях и узлах как о сложных технических системах,
                        познакомитесь с закономерностями функционирования и развития железнодорожных станций и узлов,
                        теорией и практикой разработки, принятия проектных и технологических решений,
                        методами формирования железнодорожных узлов, размещением и профилированием разъездов,
                        обгонных пунктов, станций, со способами беспрепятственного развития станции.
                        Студенты, аспиранты и молодые ученые направления активно путешествуют и участвуют
                        в международных и всероссийских конференциях. География международных конференций
                        обширна и включает в себя следующие страны: Германия, Чехия, Польша, Китай, Казахстан.
                        Материалы научных трудов публикуются в журнале «Современные проблемы транспортного комплекса России».
                    </p>

                    <p className="medical-note">
                        Направление подготовки/специальность, при приеме на обучение по которой,
                        поступающий проходит предварительный медицинский осмотр (обследование),
                        в порядке, установленном при заключении трудового договора или служебного
                        контракта по соответствующей должности или специальности.
                    </p>
                </div>
            </div>

            <div className="program-video-container">
                <div className="video-player">
                    <div
                        className={`video-wrapper ${isPlaying ? 'playing' : ''}`}
                        onClick={togglePlay}
                    >
                        {/* Замените 'your-video.mp4' на путь к вашему видео */}
                        <video
                            ref={videoRef}
                            className="program-video"
                            poster={process.env.PUBLIC_URL + '/images/video-poster.jpg'} // Постер для видео
                            onEnded={handleVideoEnd}
                            controls={isPlaying}
                        >
                            <source
                                src={process.env.PUBLIC_URL + '/videos/program-video.mp4'}
                                type="video/mp4"
                            />
                            <source
                                src={process.env.PUBLIC_URL + '/videos/program-video.webm'}
                                type="video/webm"
                            />
                            Ваш браузер не поддерживает видео тег.
                        </video>

                        {!isPlaying && (
                            <div className="video-overlay">
                                <div className="play-button">
                                    ▶
                                </div>
                                <div className="video-preview-text">
                                    Нажмите для воспроизведения
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="video-controls">
                        <div className="video-progress-bar">
                            <div className="video-progress"></div>
                        </div>
                        <div className="video-info">
                            <span className="video-title">Железнодорожные станции и узлы</span>
                            <span className="video-duration">2:45</span>
                        </div>
                        <div className="video-control-buttons">
                            <button
                                className="control-btn"
                                onClick={togglePlay}
                            >
                                {isPlaying ? '⏸' : '▶'}
                            </button>
                            <button
                                className="control-btn"
                                onClick={() => {
                                    if (videoRef.current) {
                                        videoRef.current.currentTime = 0;
                                        videoRef.current.pause();
                                        setIsPlaying(false);
                                    }
                                }}
                            >
                                ⏹
                            </button>
                            <button className="control-btn">🔊</button>
                            <button className="control-btn">⛶</button>
                        </div>
                    </div>
                </div>
                <p className="video-note">Видео о программе подготовки специалистов</p>
            </div>
        </section>
    );
};

export default ProgramInfo;
