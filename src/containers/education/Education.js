import React from "react";

import educationData from "../../assets/data/education";
import { EducationCard } from "../../components";
import { useTheme } from "../../context/ThemeContext";


import './Education.css'


const Education = () => {
    const { theme } = useTheme()

    return(
        <section className={`education ${theme}`}>
            <h1> Education </h1>
            <div className="education-cards">
                {educationData.map((exp, index) => (
                    <EducationCard key={index} {...exp} />
                ))}
            </div>
        </section>
    );
};

export default Education;
