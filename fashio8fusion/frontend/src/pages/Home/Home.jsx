import { Helmet } from 'react-helmet-async';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className={styles.home}>
      <Helmet>
        <title>Fashio8Fusion</title>
      </Helmet>
      <div className={styles.promo_container1_wrapper}>
        <div className={styles.promo_container1_content}>
          <div className={styles.promo_container1_content_left}>
            <div className={styles.promo1_text_container}>
              <p>SUMMER SALE</p>
              <p>
                GET{' '}
                <span className={styles.text_transparent_border}>30% OFF</span>
              </p>
              <p>On all dress.</p>
              <div className={styles.promo1_button_container}>
                <Link to="/women">Shop Now</Link>
              </div>
            </div>
          </div>
          <div className={styles.promo_container1_content_right}>
            <img
              src="/assets/promo1.png"
              alt="promo"
              className={styles.promo1}
            />
            <img
              src="/assets/promo1_2.png"
              alt="promo"
              className={styles.promo1_2}
            />
          </div>
        </div>
      </div>
      <div className={styles.promo_container2}></div>
    </div>
  );
};
