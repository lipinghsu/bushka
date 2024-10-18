import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next";

import './styles.scss';
import backgroundImage from '../../../src/assets/tp101.jpg';
// import backgroundImage from '../../../src/assets/cks.jpg';

const About = props => {
    const { t } = useTranslation(["about"]);

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])

    return(
        <section className='about'>
            <div className='about-wrap'>
                <div className="image-container">
                    <img src={backgroundImage} alt="Taipei 101 background" />
                </div>
                <div className='text-content-wrap'>
                    <h3>About</h3>
                    <p className='text-content'>
                    &emsp;&emsp;{t("Founded in the streets of Taipei in 2023, Büshka is an independent streetwear label that blends the energy of contemporary street culture with the depth of traditional Eastern influences. Rooted in the heart of Taipei’s, Büshka captures the essence of two different worlds, crafting a style that bridges the old and the new.")}
                    </p>
                    <p className='text-content'>
                    &emsp;&emsp;{t("Büshka aims to create bold and unique styles that combine traditional Eastern culture with modern urban aesthetics. Every design is a reflection of our commitment to offering clothing that resonates with individuals who value both individuality and the harmony between heritage and contemporary street fashion.")}
                    </p>
                    <p className='text-content'>
                    &emsp;&emsp;{t("With a focus on storytelling through apparel, Büshka is more than just a brand— it’s a movement, embodying the harmony between heritage and the pulse of the city.")}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
