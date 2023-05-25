import React from 'react';
import { ctechPage } from '../constants';
import styles from "../style";

const AboutPage = () => {
  return (
    <div className={`${styles.flexCenter} about-page`}>
      <h1 className='about-title'> {ctechPage.title} </h1>
      <h2 className='about-subtitle'> {ctechPage.subtitle} </h2>
      <div className={`${styles.flexCenter} ${styles.boxWidth} about-content`}>
        <div className={`${styles.flexCenter} ${styles.boxWidth} about-text`}>
          <p>
            {ctechPage.description}
          </p>
        </div>
        <div className="about-image">
        <iframe width="560" height="315"
            src={ctechPage.video} alt="Feature Photo" >
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
