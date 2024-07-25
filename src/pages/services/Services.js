import React, {useEffect} from "react";
import services from '../../assets/data/allServices'
import { DetailedServiceCard } from "../../components";
import servicesIcons from "../../assets/images/services";
import { useTheme } from '../../context/ThemeContext';
import './Services.css'


const AllServices = ()  => {
    const { theme }  = useTheme();

     useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <section className={`services-page ${theme}`}>
            <div className="service-page-intro">
                <p className="line1">
                Looking to enhance your project's quality and efficiency?
                </p>
                <p className="line2">
                    Explore my personalized services crafted to optimize software performance and reliability
                </p>
            </div>
            <div className="detailed-services-list">
                {services.map((exp, index) => (
                    <DetailedServiceCard key={index} {...exp} />
                ))}
            </div>
            <div className={`mentorship-section ${theme}`}>
                <div className="mentorship-left-column">
                    <h1>Seeking for Mentorship?</h1>
                    <p>Let's connect via a 1-on-1 session  .
                        <a href="https://adplist.org/mentors/mona-m-abd-el-rahman" target="_blank" rel="noopener noreferrer">Book Your Slot Now</a>
                    </p>
                </div>
                <div className="mentorship-right-column">
                    <img src={process.env.PUBLIC_URL + servicesIcons.adplist} alt="Adp List Logo" className="adp-list-logo" />
                </div>
            </div>
            <div className="upwork-section">

            </div>
        </section>
    )
}

export default AllServices;
