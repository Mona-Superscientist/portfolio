import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { useTheme } from '../../context/ThemeContext';
import './InnerNavbar.css';

const InnerNavbar = ({ currentLabel, currentRoute }) => {
    const { theme, toggleTheme } = useTheme();

    const breadcrumbItems = [
        { label: '🏡 Home', path: '/' },
        { label: currentLabel, path: currentRoute }
    ];

    return (
        <nav className={`inner-navbar ${theme}`}>
            <div className="breadcrumb">
                {breadcrumbItems.map((item, index) => (
                    <React.Fragment key={index}>
                        <Link to={item.path} className={`breadcrumb-item ${theme}`}>{item.label}</Link>
                        {index !== breadcrumbItems.length - 1 && <span className="breadcrumb-separator">/</span>}
                    </React.Fragment>
                ))}
            </div>
            <div className="theme-toggle" onClick={toggleTheme}>
                <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
            </div>
        </nav>
    );
};

export default InnerNavbar;
