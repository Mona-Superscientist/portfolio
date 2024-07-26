import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

import './DetailedServiceCard.css'
import { useTheme } from '../../context/ThemeContext';


const DetailedServiceCard = ({ logo, name, intro, keyPoints }) => {
    const { theme } = useTheme();

    return (
        <div className={`detailed-service-card ${theme}`}>
            <div className="detailed-service-header">
                <h3 className="detailed-service-name">{name}</h3>
                <div className='detailed-service-logo-container'>
                    <img className="detailed-service-logo" src={logo} alt={name}  />
                </div>
            </div>
            <div className={`detailed-service-intro ${theme}`}>
                <p>{intro}</p>
            </div>
            <ul className="key-points">
                {keyPoints.map((item, index) => (
                    <li key={index}>
                    <FontAwesomeIcon icon={faBolt} className="icon" />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DetailedServiceCard;
