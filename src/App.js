import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import ProgramHeader from './components/ProgramHeader/ProgramHeader';
import ProgramInfo from './components/ProgramInfo/ProgramInfo';
import Admission from './components/Admission/Admission';
import SuccessStories from './components/SuccessStories/SuccessStories';
import ContactForm from './components/ ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import ProgramPartners from './components/ProgramPartners/ProgramPartners';
import ProgramDocuments from './components/ProgramDocuments/ProgramDocuments';
import Professions from './components/Professions/Professions';
import HowToApply from "./components/HowToApply/HowToApply";
import AdmissionInfo from "./components/AdmissionInfo/AdmissionInfo";
import AdmissionStats from "./components/AdmissionStats/AdmissionStats";

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="App">
            {/* Оверлей для закрытия меню */}
            <div
                className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}
                onClick={closeMenu}
            ></div>

            <Sidebar isOpen={isMenuOpen} onClose={closeMenu} />
            <div className={`main-content ${isMenuOpen ? 'menu-open' : ''}`}>
                <Header onMenuToggle={toggleMenu} isMenuOpen={isMenuOpen} />
                <main className="content">
                    <ProgramHeader />
                    <AdmissionInfo />
                    <AdmissionStats />
                    <ProgramInfo />
                    <ProgramPartners />
                    <ProgramDocuments />
                    <Professions />
                    <HowToApply/>
                    <Admission />
                    <SuccessStories />
                    <ContactForm />
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default App;
