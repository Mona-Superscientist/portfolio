import React, { useRef, useState } from "react";
import PhoneInput from 'react-phone-number-input';

import emailjs from "@emailjs/browser";
import 'react-phone-number-input/style.css';

import { useTheme } from "../../context/ThemeContext";
import './ContactForm.css'

const Contact = ({ onSubmit, onCancel }) => {
    const  { theme } = useTheme()
    const form = useRef();
    const [phoneValue, setPhoneValue] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        console.log('service_id', process.env.REACT_APP_EMAILJS_SERVICE_ID)
        console.log('TEMPLATE_id', process.env.REACT_APP_EMAILJS_TEMPLATE_ID)
        console.log('public_key', process.env.REACT_APP_EMAILJS_PUBLIC_KEY)


        emailjs
        .sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            { publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY }
        )
        .then(
            (result) => {
                console.log(JSON.stringify(result))
                console.log(result.text);
                console.log("message sent");
            },
            (error) => {
                console.log(JSON.stringify(error))
                console.error("Failed to send message. Error:", error.text);
            }
        );

        onSubmit()
    };

    return(
        <form className={`contact-form ${theme}`} ref={form} onSubmit={sendEmail}>
            <div className="flex-column">
                <label> Name </label>
            </div>
            <div className="inputForm">
                <svg fill="#000000" width="20px" height="82px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
                    <path d="M228,128A100,100,0,1,0,60.71,201.90967a3.97048,3.97048,0,0,0,.842.751,99.79378,99.79378,0,0,0,132.8982-.00195,3.96558,3.96558,0,0,0,.83813-.74756A99.76267,99.76267,0,0,0,228,128ZM36,128a92,92,0,1,1,157.17139,64.87207,75.616,75.616,0,0,0-44.50782-34.04053,44,44,0,1,0-41.32714,0,75.61784,75.61784,0,0,0-44.50782,34.04A91.70755,91.70755,0,0,1,36,128Zm92,28a36,36,0,1,1,36-36A36.04061,36.04061,0,0,1,128,156ZM68.86475,198.417a68.01092,68.01092,0,0,1,118.27.00049,91.80393,91.80393,0,0,1-118.27-.00049Z"/>
                </svg>
                <input type="text" name="user_name" placeholder="Write your name here .." />
            </div>
            <div className="flex-column">
                <label > email </label>
            </div>
            <div className="inputForm">
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM16 12V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16" stroke="#000000" stroke-width="1" stroke-linecap="round" strokeLinejoin="round"/>
                </svg>
                <input type="email" name="user_email" placeholder="Write your email here .." />
            </div>
            <div className="flex-column">
                <label> Mobile No. </label>
            </div>
            <div className="inputForm">
                <PhoneInput
                    international
                    defaultCountry="US"
                    placeholder="Enter phone number"
                    name="user_mobile"
                    value={phoneValue}
                    onChange={setPhoneValue}
                    inputProps={{
                        required: true,
                        autoFocus: true,
                    }}
                />
            </div>
            <div className="flex-column">
                <label> Message </label>
            </div>
            <div className="message-container">
                <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <div className="button-group">
                <button className="form-reset-btn" type="button" onClick={onCancel}>Cancel</button>
                <button className="form-submit-btn" type="submit">Send Email</button>
            </div>
        </form>
    )
}

export default Contact
