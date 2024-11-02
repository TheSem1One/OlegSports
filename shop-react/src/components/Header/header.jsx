import React from 'react';
import styles from './index.module.scss';
import { Link, Navigate ,useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../../redux/slices/auth';


export const Header=()=> {
  const isAuth = useSelector(selectIsAuth);
  const navigate = useNavigate();
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
      <div
      className={styles.brandTitle}
      onClick={() =>navigate ('/')}
      style={{ cursor: 'pointer' }}
    >
      OlegaSports
    </div>
      

        <div className={styles.contactInfo}>
          <p className={styles.workingHours}>ПН-ПТ:   8:00-18:00</p>
          <p className={styles.phoneNumber}>0 992-347-658</p>

          <div className={styles.socialIcons}>
            {/* Social media icons */}
            <img className={styles.socialIcon} src={'/assets/70c09d39344c7505093752bbbd28e40d.svg'} alt="alt text" />
            <img className={styles.socialIcon1} src={'/assets/ccd2fc0fceb8bf773414f7862ea90e1c.svg'} alt="alt text" />
            <Link to={isAuth ? ('/profile') : ('/auth')}>
              <img className={styles.socialIcon2} src={'/assets/dbeb9fe98b5d2806188d6e02f9f860cc.svg'} alt="alt text" />
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}
