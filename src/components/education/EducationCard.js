import React from "react";
import { useTheme } from '../../context/ThemeContext';

import './EducationCard.css'


const EducationCard = ({logo, university, degree, duration}) => {
    const { theme } = useTheme();

    return(
        <section className={`education-card ${theme}`}>
            <div className="education-logo-placeholder">
                <img className="education-logo" src={process.env.PUBLIC_URL + logo} alt={`${university} img`} />
            </div>
            <div className="education-item-content">
                <h1> {university} </h1>
                <h2 className="education-degree"> {degree} </h2>
                <h2 className="education-duration"> {duration} </h2>
            </div>
        </section>
    )
}

export default EducationCard;
