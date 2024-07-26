import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

import { useTheme } from '../../context/ThemeContext';
import logo from '../../assets/images/logo.png'
import './Navbar.css';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className={`navbar ${theme}`}>
            <div className="logo">
                <img className='navbar-logo' src={logo} alt="logo" />
            </div>
            <ul className="nav-links">
                <li className={`menu-item ${theme}`}>
                    <Link to="about-me-container" smooth={true} duration={500} spy={true} offset={-70}>
                        <span role="img" aria-label="about icon">
                            👩‍💻 About
                        </span>
                    </Link>
                </li>
                <li className={`menu-item ${theme}`}>
                    <Link to={`services ${theme}`} smooth={true} duration={500} spy={true} offset={-70}>
                        <span role="img" aria-label="laptop icon">
                            💻 Services
                        </span>
                    </Link>
                </li>
                <li className={`menu-item ${theme}`}>
                    <Link to="experiences" smooth={true} duration={500} spy={true} offset={-70}>
                        <span role="img" aria-label="exp icon">
                            🔖 Work Experience
                        </span>
                    </Link>
                </li>
                <li className={`menu-item ${theme}`}>
                    <Link to="skills" smooth={true} duration={500} spy={true} offset={-70}>
                        <span role="img" aria-label="gear icon">
                            ⚙️ Skills
                        </span>
                    </Link>
                </li>
                <li className={`menu-item ${theme}`}>
                    <Link to="certifications" smooth={true} duration={500} spy={true} offset={-70}>
                        <span role="img" aria-label="gear icon">
                            📄 Certificates
                        </span>
                    </Link>
                </li>
                <li className={`menu-item ${theme}`}>
                    <Link to="education" smooth={true} duration={500} spy={true} offset={-70}>
                        <span role="img" aria-label="books icon">
                            📚 Education
                        </span>
                    </Link>
                </li>
            </ul>
            <div className="theme-toggle" onClick={toggleTheme}>
                <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
            </div>
        </nav>
    );
};

export default Navbar;
