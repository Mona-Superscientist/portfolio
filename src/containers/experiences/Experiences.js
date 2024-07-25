import React from 'react';
import { Link } from 'react-router-dom';
import ExperienceCard from '../../components/experience/ExperienceCard'
import experiences from '../../assets/data/experiences'
import './Experiences.css';

const Experiences = () => {
    const maxCardsToShow = 6;

    return (
        <section className="experiences">
            <h1>Work Experiences</h1>
            <div className="experience-cards">
                {experiences.slice(0, maxCardsToShow).map((exp, index) => (
                    <ExperienceCard key={index} {...exp} />
                ))}
            </div>
            {experiences.length > maxCardsToShow && (
                <div className="experiences-buttons">
                    <Link to="/all-experiences" className="show-all-button">
                        View All Experiences
                    </Link>
                </div>
            )}
        </section>
    );
};

export default Experiences;
