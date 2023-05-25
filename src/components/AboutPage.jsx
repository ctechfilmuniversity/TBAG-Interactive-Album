import React from 'react';
import { aboutPage } from '../constants';
import styles from "../style";

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1 className='about-title'> {aboutPage.title} </h1>
      <h2 className='about-subtitle'> {aboutPage.subtitle} </h2>
      <div className={`about-content`}>
        <div className="about-text">
          <p>
            {aboutPage.description}
          </p>
        </div>
        <div className="about-image">
          <img src={aboutPage.img} alt="Feature Photo" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

// 
