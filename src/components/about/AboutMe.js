import React from 'react';
import './AboutMe.css';
import gifs from '../../assets/images/gifs';

const AboutMe = ({ name, intro, description, isExpanded, toggleExpanded, socialMedia }) => {
    const maxCharacters = 300;

    const displayText = isExpanded ? description : `${description.slice(0, maxCharacters)}...`;

    const handleLinkClick = (platform, url) => {
        if (platform === 'email') {
            window.location.href = `mailto:${url}`;
        } else {
            window.open(url, '_blank');
        }
    }

    return (
        <div className="about-me-content">
            <span className='greeting-wrapper'>
                <h1>Hi, I'm {name}</h1>
                <img className="greeting-emoji" src={gifs.wave} alt="wave" width="50" height="50" />
            </span>
            <span className="intro-wrapper">
                <img className="intro-emoji" src={gifs.bug} alt="🐞" width="32" height="32" />
                <p className='intro-statement'> {intro} </p>
                <img className="intro-emoji" src={gifs.bug} alt="🐞" width="32" height="32" />
            </span>
            <div className={`about-me-description ${isExpanded ? 'expanded' : ''}`}>
                <p>{displayText}</p>
            </div>
            {description.length > maxCharacters && (
                <span className="read-more" onClick={toggleExpanded}>
                    {isExpanded ? 'Read Less' : '...Read More'}
                </span>
            )}
            <div className="social-media-icons">
                {socialMedia.map((media) => (
                    <a key={media.platform} href={media.url} target="_blank" rel="noopener noreferrer" className='icon' onClick={() => handleLinkClick(media.platform, media.url)}>
                        <i className={media.class}></i>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default AboutMe;
