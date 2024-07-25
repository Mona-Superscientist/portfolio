import React from 'react';
import './Buttons.css';

export const CustomBtn = ({ buttonTxt, onClick }) => (
    <button className="button-1" onClick={onClick}>
        {buttonTxt}
    </button>
);
