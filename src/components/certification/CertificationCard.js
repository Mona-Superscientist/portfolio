import React from 'react';
import './CertificationCard.css';
import { CustomBtn } from '../../components/helpers/buttons/Buttons'
import { useTheme } from '../../context/ThemeContext';

const CertificationCard = ({ name, provider, date, tags, logo }) => {
    const { theme } = useTheme();

    const handleTagClick = (tag) => {
        if (tag.link) {
            window.open(tag.link, '_blank');
        } else {
            console.log(`Clicked tag: ${tag.name}`);
        }
    };

    return (
        <div className={`certification-card ${theme}`}>
            <div className='cert-logo-container'>
                <img src={logo} className='cert-logo' alt={name} />
            </div>
            <h3>{name}</h3>
            <p className='cert-provider'>{provider}</p>
            <p className='cert-date'>{date}</p>
            <div className="certification-tags">
                    {tags && tags.length > 0 && tags.map((tag, index) => (
                        <CustomBtn key={index} buttonTxt={tag.name} onClick={() => handleTagClick(tag)} />
                    ))}
            </div>
        </div>
    );
};

export default CertificationCard;
