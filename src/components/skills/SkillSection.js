import React, { useState, useEffect, useRef } from 'react';
import './SkillSection.css';
import Modal from '../helpers/modal/Modal';
import { useTheme } from '../../context/ThemeContext';

const SkillSection = ({ title, skills = [] }) => {
    const { theme } = useTheme();

    const [modalOpen, setModalOpen] = useState(false);
    const [numSkillsToShow, setNumSkillsToShow] = useState(5);
    const skillSectionRef = useRef(null);

    useEffect(() => {
        const calculateSkillsToShow = () => {
            if (skillSectionRef.current) {
                const containerWidth = skillSectionRef.current.offsetWidth;
                const skillItemWidth = 140;
                const newNumSkillsToShow = Math.floor(containerWidth / skillItemWidth);
                setNumSkillsToShow(newNumSkillsToShow);
            }
        };

        calculateSkillsToShow();
        window.addEventListener('resize', calculateSkillsToShow);

        return () => {
            window.removeEventListener('resize', calculateSkillsToShow);
        };
    }, []);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className={`skill-section ${theme}`}>
            <h3>{title}</h3>
            <div className='skill-section-body' ref={skillSectionRef}>
                {skills.slice(0, numSkillsToShow).map((skill, index) => (
                    <div className='skill-item' key={index}>
                        <div className='logo-placeholder'>
                            <img src={skill.logo} alt={skill.name} className="skill-logo" />
                        </div>
                        <p className='skill-name'>{skill.name}</p>
                    </div>
                ))}
            </div>
            {skills.length > numSkillsToShow && (
                <div className="view-more-link" onClick={openModal}>
                    View More...
                    {modalOpen && (
                        <Modal onClose={closeModal} title={title}>
                            <div className='modal-all-skills'>
                                {skills.map((skill, index) => (
                                    <div key={index} className="modal-skill">
                                        <div className='modal-skill-logo-placeholder'>
                                            <img src={skill.logo} alt={skill.name} className="modal-skill-logo" />
                                        </div>
                                        <p className='modal-skill-name'>{skill.name}</p>
                                    </div>
                                ))}
                            </div>
                        </Modal>
                    )}
                </div>
            )}
        </div>
    );
};

export default SkillSection;
