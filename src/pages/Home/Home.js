import React from 'react';
import LoadingImage1 from '../../images/trike4.png';

import Cons from './cons/Cons';
import Testimonial from './testimonials/Testimonial';
import Hero from './Hero/Hero';
import Footer from './Footer/Footer';
const Landing = () => {
  return (
    <>
      <div className="container mt-5 ">
        <Hero />
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

      <div className="bg-primary my-5 p-2">
        <div className="container mt-5  ">
          <h1 className="mb-4 text-light">Testimonials</h1>
          <Testimonial />
        </div>
      </div>

      <div className=" my-5 p-2">
        <Footer />
      </div>
    </>
  );
};

export default Landing;
