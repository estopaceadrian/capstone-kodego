import React from 'react';
import styles from './Pricing.module.css';

const Pricing = (props) => {
  return (
    <div className={styles.wrapperC}>
      <div className={styles['pricing']}>
        <div className="container">
          <div className={styles['container']}>
            <div className={styles['container1']}>
              <h1>{props.heading}</h1>
              <span className={styles['text01']}>
                <span>
                  <span>
                    Check the price from your pick-up location to your
                    destination. Another option if for service.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
            </div>
            <div className={styles['container2']}>
              <div className={styles['container3']}>
                <span className={styles['text05']}>{props.text}</span>
                <span className={styles['text06']}>{props.text1}</span>
                <span className={styles['text07']}>
                  <span className={styles['text08']}>Passengers</span>
                  <span> 4</span>
                </span>
                <span className={styles['text10']}>
                  <span className={styles['text11']}>Loads</span>
                  <span> Heavy or Light</span>
                </span>
                <span className={styles['text13']}>
                  <span className={styles['text14']}>Tip -</span>
                  <span> Up to you</span>
                </span>
                <span className={styles['text16']}>
                  <span className={styles['text17']}>One Drop Off</span>
                </span>
                <button className={` ${styles['button']}   `}>
                  {props.button}
                </button>
              </div>
              <div className={styles['container4']}>
                <span className={styles['text18']}>{props.text2}</span>
                <span className={styles['text19']}>{props.text3}</span>
                <span className={styles['text20']}>
                  <span className={styles['text21']}>4</span>
                  <span> Passengers</span>
                </span>
                <span className={styles['text23']}>
                  <span className={styles['text24']}>Loads</span>
                  <span> Heavy or Light</span>
                </span>
                <span className={styles['text26']}>
                  <span className={styles['text27']}>Tip - </span>
                  <span>Up to you</span>
                </span>
                <span className={styles['text29']}>
                  <span className={styles['text30']}>Multiple Routes</span>
                </span>
                <button className={` ${styles['button1']}   `}>
                  {props.button1}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Pricing.defaultProps = {
  heading: 'Pricing Plans',
  text: 'Point to Point',
  text1: 'PHP',
  button: 'View Pricing',
  text2: 'Service',
  text3: 'PHP',
  button1: 'View Pricing',
};

export default Pricing;
