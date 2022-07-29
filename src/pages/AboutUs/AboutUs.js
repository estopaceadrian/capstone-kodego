import React from 'react';
import image from '../../images/LogoDark.jpg';
import me from '../../images/me.jpg';
import styles from './AboutUs.module.css';
import ModalComponent from '../../components/ModalComponent';

const AboutUs = (props) => {
  return (
    <div className="container">
      <div className={styles['hero'] + ' mb-5'}>
        <div className={styles['hero-text-container']}>
          <h1 className={` ${styles['heading'] + ' mb-3'}  `}>
            <span className="display-2">A Joy to Ride</span>
            <br></br>
          </h1>
          <p className={` ${styles['text3'] + ' mb-3'}  `}>{props.Text}</p>
          <button
            className={` ${styles.ctabtn + ' btn btn-lg btn-primary '}   `}
          >
            <ModalComponent />
          </button>
        </div>
        <img alt={props.Image_alt} src={image} className={styles['image']} />
      </div>

      <div className="  container">
        <h1 className="text-center font-weight-bold display-2 mb-5">
          Founding Team
        </h1>
        <div className={styles['hero'] + ' my-5'}>
          <img alt={props.Image_alt} src={me} className={styles['image']} />{' '}
          <div className={styles['hero-text-container']}>
            <h1 className={` ${styles['heading'] + ' mb-3'}  `}>
              <span className="font-weight-bold">Adrian E.</span>
              <br></br>
            </h1>
            <p className={` ${styles['text3'] + ' mb-3'}  `}>{props.Text2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

AboutUs.defaultProps = {
  Image_alt: 'image',
  Text: 'We’re only a joy to ride because of our awesome team and the struggles we’ve endured to give everyone the best service possible.  ',
  Text2:
    'During highschool days, I need to take 10 minute walk from our home to tricycle station. From that time on, he became an advocate of inclusive mobility and sustainable transport. Now, He is studying at KODEGO as Part time to create more helpful web apps.',
  Cta_btn: 'Lets Go',
};

export default AboutUs;
