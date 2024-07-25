import React from 'react';
import './Certification.css'
import { CertificationCard } from '../../components';
import certificates from '../../assets/data/certificates';
import Carousel from '../../components/helpers/carousel/Carousel';

const Certifications = () => {
    const certificationItems = certificates.map((cert, index) => (
        <CertificationCard key={index} {...cert} />
    ));

    return (
        <section className="certifications">
            <h1>Certifications</h1>
            <Carousel items={certificationItems} />
        </section>
    );
};

export default Certifications;
