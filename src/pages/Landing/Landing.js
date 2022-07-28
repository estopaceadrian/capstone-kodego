import React from 'react';
import styles from './Landing.module.css';
import LoadingImage from '../../images/LogoLight.jpg';
import LoadingImage1 from '../../images/trike4.png';
import Button from 'react-bootstrap/Button';

import Cons from './cons/Cons';
import Testimonial from './testimonials/Testimonial';
const Landing = () => {
  return (
    <>
      <div className="row mt-5  " id="#">
        <div
          className={
            ' col-lg-12 d-flex flex-column text-center mt-5  justify-content-center'
          }
        >
          <h1>Get to your destination without walking to terminal</h1>
          <h3 className="m-5">
            Para is a Tricycle ride-hailing platform that helps provide mobility
            for Filipinos in provinces. We are working to keep you safe during
            these uncertain times while saving precious time on the road.
          </h3>
        </div>
        <div className="row mb-5 justify-content-center">
          <div
            className={' col-sm-6 d-flex flex-column justify-content-center'}
          >
            <img className="img-fluid" src={LoadingImage} alt="" />
          </div>

          <div
            className={
              ' col-md-3 d-flex flex-column  justify-content-center text-center'
            }
          >
            <Button size="lg" className="p-lg-4" variant="outline-dark">
              Book Now!
            </Button>
          </div>
        </div>
      </div>

      <div className="row bg-primary ">
        <div
          className={' col-md-6 d-flex flex-column justify-content-center py-5'}
        >
          <img src={LoadingImage1} alt="" />
        </div>
        <div className={' col-md-6 d-flex flex-column justify-content-center'}>
          <h2 className="m-5 text-light">
            All bikers go through stringent background checks, safety training,
            COVID-19 preparedness training, and skills assessments. Tricycles
            are quality-checked to ensure passenger safety.
          </h2>
        </div>
      </div>

      <div className="container mt-5 ">
        <Cons />
      </div>
      <div className="container mt-5 ">
        <Testimonial />
      </div>

      <div className="row mt-5">
        <div className={' col-md-6 d-flex flex-column justify-content-center'}>
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
