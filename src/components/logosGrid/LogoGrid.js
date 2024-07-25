import React from "react";
import './LogoGrid.css'
import gifs from '../../assets/images/gifs';
import { useTheme } from '../../context/ThemeContext';


const LogoGrid = ({logos}) => {
    const { theme } = useTheme();

    return (
        <div className={`logos-section ${theme}`}>
            <div className="logos-section-header">
                <h2> Top apps I participated in improving their quality </h2>
                <img className="nerd-emoji" src={gifs.nerd} alt="wave" width="50" height="50" />
            </div>
            <div className="logos-images">
                {logos && logos.map((logo, index) => (
                    <img key={index} src={logo.src} alt={logo.name} className="app-logo"/>
                ))}
            </div>
        </div>
    )
};

export default LogoGrid;
