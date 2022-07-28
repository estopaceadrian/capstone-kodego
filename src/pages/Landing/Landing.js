import React from 'react';
import styles from './Landing.module.css';
import LoadingImage from '../../images/LogoLight.jpg';
import LoadingImage1 from '../../images/trike4.png';

import Cons from './cons/Cons';
const Landing = () => {
  return (
    <>
      <div className="row">
        <div
          className={
            styles.LandingText +
            ' col-md-6 d-flex flex-column justify-content-center'
          }
        >
          <img src={LoadingImage} alt="" />
        </div>
        <div
          className={
            styles.LandingText +
            ' col-md-6 d-flex flex-column   justify-content-center'
          }
        >
          <h3 className="m-5">
            Para is a Tricycle ride-hailing platform that helps provide mobility
            for Filipinos in provinces. We are working to keep you safe during
            these uncertain times while saving precious time on the road.
          </h3>
        </div>
      </div>

      <div className="row bg-primary">
        <div
          className={
            styles.LandingText +
            ' col-md-6 d-flex flex-column justify-content-center'
          }
        >
          <h5 className="m-5 text-light">
            All bikers go through stringent background checks, safety training,
            COVID-19 preparedness training, and skills assessments. Tricycles
            are quality-checked to ensure passenger safety.
          </h5>
        </div>
        <div
          className={
            styles.LandingText +
            ' col-md-6 d-flex flex-column justify-content-center py-5'
          }
        >
          <img src={LoadingImage1} alt="" />
        </div>
      </div>

      <div class="container mt-5 ">
        <Cons />
      </div>

      <div className="row mt-5">
        <div
          className={
            styles.LandingText +
            ' col-md-6 d-flex flex-column justify-content-center'
          }
        >
          <img src={LoadingImage} alt="" />
        </div>

        <div
          className={
            styles.LandingText +
            ' col-md-6 d-flex flex-column text-center justify-content-center'
          }
        >
          <h3 className="m-5">
            Para is a Tricycle ride-hailing platform that helps provide mobility
            for Filipinos in provinces. We are working to keep you safe during
            these uncertain times while saving precious time on the road.
          </h3>
        </div>
      </div>
      <div className="container-fluid bg-dark vh-100"></div>
    </>
  );
};

export default Landing;
