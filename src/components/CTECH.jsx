import React from 'react';
import { ctechPage } from '../constants';
import styles from "../style";

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1 className='about-title'> {ctechPage.title} </h1>
      <h2 className='about-subtitle'> {ctechPage.subtitle} </h2>
      <div className={`about-content ${styles.flexCenter}`}>
        <div className="about-text">
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
