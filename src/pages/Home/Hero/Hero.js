import React from 'react';
import ModalComponent from '../../../components/ModalComponent';
import image from '../../../images/LogoDark.jpg';
import styles from './Hero.module.css';

const Hero = (props) => {
  return (
    <div className={styles['hero'] + ' mb-5'}>
      <div className={styles['hero-text-container']}>
        <h1 className={` ${styles['heading'] + ' mb-3'}  `}>
          <span>Get to your destination without walking to terminal</span>
          <br></br>
        </h1>
        <p className={` ${styles['text3'] + ' mb-3'}  `}>{props.Text}</p>
        <button className={` ${styles.ctabtn + ' btn btn-lg btn-primary '}   `}>
          <ModalComponent />
        </button>
      </div>
      <img alt={props.Image_alt} src={image} className={styles['image']} />
    </div>
  );
};

Hero.defaultProps = {
  Image_alt: 'image',
  Text: 'Para is a Tricycle ride-hailing platform that helps provide mobility for Filipinos in provinces. We are working to keep you safe during these uncertain times while saving precious time on the road.  ',
  Cta_btn: 'BOOK NOW!',
};

export default Hero;
