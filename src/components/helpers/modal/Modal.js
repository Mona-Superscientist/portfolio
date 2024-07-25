import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../../context/ThemeContext';

const Modal = ({ onClose, title, children, component }) => {
    const { theme } = useTheme();

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (e.target.classList.contains('modal-overlay')) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [onClose]);

    const handleClose = (e) => {
        e.stopPropagation();
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className={component ? `${component}-modal ${theme}` : `modal ${theme}`}>
                <span className="close" onClick={handleClose}>
                    <FontAwesomeIcon icon={faTimes} />
                </span>
                <h3 className='modal-title'>{title}</h3>
                <div className="modal-content">
                    {children}
                </div>

            </div>
        </div>
    );
};

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    component: PropTypes.string,
};

export default Modal;
