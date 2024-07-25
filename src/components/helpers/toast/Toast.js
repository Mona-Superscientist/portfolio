import React, { useEffect, useState } from "react";
import './Toast.css';

const Toast = ({ icon, bk_color, border_color, msg_color, message, onClose }) => {
    const [showToast, setShowToast] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowToast(false);
            onClose();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        showToast && (
            <div className="toast-container" style={{ backgroundColor: bk_color, border: `solid 1px ${border_color}` }}>
                <div className="toast-icon">
                    {icon}
                </div>
                <div className="toast-message" style={{ color: msg_color }}> {message} </div>
                <div className="toast-icon close-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true" className="close-svg">
                        <path d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z" className="close-path"></path>
                    </svg>
                </div>
            </div>
        )
    );
};

export default Toast;
