import React from 'react';
import './ExperienceCard.css';

import { useTheme } from '../../context/ThemeContext';

const ExperienceCard = ({ company, title, duration, description, logo }) => {
    const { theme }  = useTheme();

    return (
        <div className={`experience-card ${theme}`}>
            <div className="experience-header" style={{ background: logo.color }}>
                <img src={process.env.PUBLIC_URL + logo.src} alt={company} className="company-logo" />
                <h2 className='company-name'>{company}</h2>
            </div>
            <div className="experience-body">
                <h3>{title}</h3>
                <p className="duration">{duration}</p>
                <ul>
                    {description.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ExperienceCard;
