import React from "react";
import './ServiceCard.css'
import { useTheme } from '../../context/ThemeContext';


const ServiceCard = ({ iconName, name, description }) => {
    const { theme } = useTheme();

    return (
        <div className={`service-card ${theme}`}>
            <div className='service-logo-container'>
                <i className={`fa-solid fa-${iconName} fa-beat`}></i>
            </div>
            <h3 className="service-name">{name}</h3>
            <p className="service-description">{description}</p>
        </div>
    );
};

export default ServiceCard;
