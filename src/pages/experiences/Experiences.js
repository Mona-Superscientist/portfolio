import React, {useEffect} from "react";
import experiences from "../../assets/data/experiences";
import { ExperienceCard, TopApps } from "../../components";

import '../../containers/experiences/Experiences.css'
import './Experiences.css'

import { useTheme } from '../../context/ThemeContext';
import topApps from '../../assets/data/logos'


const AllExperiences = () => {
    const { theme }  = useTheme();

     useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <section className={`experience-page ${theme}`}>
            <h1 className="experience-page-title"> Work Experiences</h1>
            <div className="experience-cards">
                {experiences.map((exp, index) => (
                    <ExperienceCard key={index} {...exp} />
                ))}
            </div>
            <div>
                <TopApps logos={topApps} />
            </div>
        </section>
    );
};

export default AllExperiences;
