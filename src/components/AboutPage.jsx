import React from 'react';
import { aboutPage } from '../constants';
import styles from "../style";

const AboutPage = () => {
  return (
    <div className={`${styles.flexCenter} about-page`}>
      <h1 className='about-title'> {aboutPage.title} </h1>
      <h2 className='about-subtitle'> {aboutPage.subtitle} </h2>
      <div className={`${styles.flexCenter} ${styles.boxWidth} about-content`}>
        <div className={`${styles.flexCenter} ${styles.boxWidth} about-text`}>
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
