import React, { useState }  from "react";
import { Link } from 'react-router-dom';
import './Services.css'
import { ServiceCard, Modal, ContactForm } from "../../components";
import { SuccessToast } from '../../containers'
import { useTheme } from '../../context/ThemeContext';
import services from "../../assets/data/services";
import email from '../../assets/images/email.gif'

const Services = () => {
    const { theme } = useTheme();
    const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const servicesToShow = services.slice(0, 6);

     const openFeedbackModal = () => {
        setIsFeedbackModalOpen(true);
    };

    const closeFeedbackModal = () => {
        setIsFeedbackModalOpen(false);
    };

    const handleSubmit = () => {
        closeFeedbackModal();
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, 3000); // Hide the toast after 3 seconds
    };

    const handleToastClose = () => {
        setShowToast(false);
    };

    return (
        <section className={`services ${theme}`}>
            <div className="services-heading">
                <h2> My Awesome Services </h2>
                <p> Explore top-tier Quality Engineering services designed to enhance your product's reliability and performance. From meticulous testing strategies to advanced automation frameworks </p>
            </div>
            <div className="services-list">
                {servicesToShow.map((exp, index) => (
                    <ServiceCard key={index} {...exp} />
                ))}
            </div>
            <div className={`service-buttons ${theme}`}>
                <Link to="/all-services" className="more-services-btn"> Explore More Services </Link>
                <button className="contact-btn" onClick={openFeedbackModal}> Get in touch </button>
            </div>
            {/* Only render the modal if isFeedbackModalOpen is true */}
            {isFeedbackModalOpen && (
                <Modal onClose={closeFeedbackModal} title="Get in touch" component="contact-us">
                    <div className="email-gif-placeholder">
                        <img className="contact-us-gif" src={email} alt="email-gif"/>
                    </div>
                    <div className="contact-us-fields">
                        <ContactForm onSubmit={handleSubmit} onCancel={closeFeedbackModal} />
                    </div>
                </Modal>
            )}
            {/* Render the toast if showToast is true */}
            {showToast && (
                <SuccessToast message="Your message has been sent!"  onClose={handleToastClose}/>
            )}
        </section>
    );
};

export default Services;
