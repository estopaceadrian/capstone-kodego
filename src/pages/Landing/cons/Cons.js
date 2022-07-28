import React from 'react';
import ConsDetails from './ConsDetails';

const items = [
  {
    title: 'Open Air Ventilation',
    content:
      'Good ventilation makes Para a good choice of transportation. Proper ventilation and exposure to sunlight exposure helps to reduce viral transmission along with the comprehensive health precautions.',
    picture:
      'https://i.pinimg.com/originals/6b/5f/95/6b5f95efa4cd946ae7f28c30fe273c11.jpg',
  },
  {
    title: 'COVID-19 precautions',
    content:
      'Our bikers are regularly PCR tested and undergo strict training on health protocols. We have also implemented cashless payments, use of own helmets, and the use of the Angkas Shield to help reduce COVID-19 transmission.',
    picture:
      'https://d0ctrine.files.wordpress.com/2020/03/trike-quarantine.jpg',
  },
  {
    title: 'Upfront and Reliable',
    content:
      'We are the number one professional motorcycle taxi platform in the country, and we continuously work to improve our delivery services. Fares are fixed upfront, all the rides and feedback are tracked via the app.',
    picture:
      'https://i2.wp.com/thefilipinochronicle.com/wp-content/uploads/2021/04/MLN-SF-Tricycle.jpeg?resize=768%2C596&ssl=1',
  },
  {
    title: 'Quick & Convenient',
    content:
      'Passengers can expect their typical commutes in a car, bus, or train cut in half or more during rush hour, and their fares reduced by almost 70% versus 4-wheeled taxis. Now that is truly a joy to ride.',
    picture:
      'https://media.istockphoto.com/photos/tricycles-waiting-at-a-street-for-people-wanting-delivery-services-picture-id1227067069?k=20&m=1227067069&s=612x612&w=0&h=9SsUWutjMG2on8gptMf1wdXou_KJi6zjTMUepv-NIJE=',
  },
];

const Cons = () => {
  return <ConsDetails items={items} />;
};

export default Cons;
