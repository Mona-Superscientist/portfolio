import React, { useState } from 'react';
import AboutMe from '../components/about/AboutMe';
import aboutMeData from '../assets/data/about'
import '../components/about/AboutMe.css'
import abt from '../assets/images/about.gif'

const AboutMeContainer = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
         <div className="about-me-container">
                <AboutMe
                    name={aboutMeData.name}
                    intro={aboutMeData.intro}
                    description={aboutMeData.description}
                    isExpanded={isExpanded}
                    toggleExpanded={handleToggleExpanded}
                    socialMedia={aboutMeData.socialMedia}
                />
            <div className="about-me-gif">
                <img src={process.env.PUBLIC_URL + abt} alt="GIF" />
            </div>
        </div>
    );
};

export default AboutMeContainer;
