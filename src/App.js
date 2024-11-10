import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { InnerNavbar, Navbar, Footer } from './components';
import { AboutContainer, CertificatesContainer, EducationContainer, ExperiencesContainer, ServicesContainer, SkillsContainer } from './containers';
import Experiences from './pages/experiences/Experiences';
import Services from './pages/services/Services'
import { ThemeProvider, useTheme } from './context/ThemeContext';

import './App.css';

const HomeContent = () => {
    const { theme } = useTheme();

    return (
        <div className={`app-container ${theme}`}>
            <Navbar />
            <div className={`main-content ${theme}`}>
                {/* Include all containers */}
                <AboutContainer />
                <ServicesContainer />
                <ExperiencesContainer />
                <SkillsContainer />
                <CertificatesContainer />
                <EducationContainer />
            </div>
            <Footer />
        </div>
    );
};

const AllExperiences = () => {
    const { theme } = useTheme();

    return (
        <div className={`app-container ${theme}`}>
            <InnerNavbar currentLabel="Working Experiences" currentRoute="/all-experiences" />
            <div className={`main-content ${theme}`}>
                <Experiences/>
            </div>
            <Footer/>
        </div>
    )
}

const AllServices = () => {
    const { theme } = useTheme();

    return(
        <div className={`app-container ${theme}`}>
            <InnerNavbar currentLabel="My Services" currentRoute="/all-services" />
                <div className={`main-content ${theme}`}>
                    <Services/>
                </div>
            <Footer/>
        </div>
    )
}

const App = () => {
    return (
        <ThemeProvider>
            <Router basename='/portfolio'>
                <Routes>
                    {/* Route for all containers */}
                    <Route path="/" element={<HomeContent />} />
                    {/* Route for AllExperiences */}
                    <Route path="/all-experiences" element={<AllExperiences />} />
                     {/* Route for AllServices */}
                    <Route path="/all-services" element={<AllServices />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;
