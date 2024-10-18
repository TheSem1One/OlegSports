import React,{useState} from 'react';
import cn from 'classnames';
import styles from './index.module.scss';
import { Login } from '../../components/Login/login';
import { Reg } from '../../components/Register/register';

export function Auth(props) {
  const [isLogin, setIsLogin] = useState({
    isLogin:false,
});
  return (
    <section className={cn(styles.mainSection, props.className, 'untitled-page')}>
      {/* Main content section */}

      <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <h1 className={styles.brandTitle}>
            OlegaSports
            <br />
          </h1>

          <div className={styles.contactInfo}>
            <p className={styles.workingHours}>ПН-ПТ:   8:00-18:00</p>
            <p className={styles.phoneNumber}>0 992-347-658</p>

            <div className={styles.socialIcons}>
              {/* Social media icons */}
              <img className={styles.socialIcon} src={'/assets/70c09d39344c7505093752bbbd28e40d.svg'} alt="alt text" />
              <img className={styles.socialIcon1} src={'/assets/ccd2fc0fceb8bf773414f7862ea90e1c.svg'} alt="alt text" />
              <img className={styles.socialIcon2} src={'/assets/dbeb9fe98b5d2806188d6e02f9f860cc.svg'} alt="alt text" />
            </div>
          </div>
        </div>

      </div>

      <div className={styles.userActionsContainer}>
        <div className={styles.authActions}>
          <p className={isLogin?styles.loginLink: styles.registerLink }onClick={() => setIsLogin(false)} disabled={!isLogin}>Реєстрація</p>
          <p className={!isLogin?styles.loginLink: styles.registerLink} onClick={() => setIsLogin(true)} disabled={isLogin}>Вхід</p>
        </div>
      </div>
     {isLogin?(<Login/>):(<Reg/>)}
       
      

      <footer className={styles.footerSection}>
        {/* Footer section */}

        <div className={styles.footerContent}>
          <img className={styles.footerDivider} src={'/assets/3d4071c1512c890a890803d27ca20b87.svg'} alt="alt text" />

          <div className={styles.footerColumns}>
            <div className={styles.helpColumn}>
              <h2 className={styles.columnTitle}>Допомога</h2>

              <div className={styles.helpLinks}>
                {/* Help links */}
                <a className={styles.helpLink}>Оплата</a>
                <a className={styles.helpLink1}>Доставка</a>
                <a className={styles.helpLink2}>Повернення</a>
              </div>
            </div>

            <div className={styles.brandsColumn}>
              <h2 className={styles.columnTitle}>Бренди</h2>

              <div className={styles.brandLogos}>
                {/* Brand logos grid */}
                <img className={styles.brandLogo} src={'/assets/c140c3ac5634add489f8a12cf3e6fa77.png'} alt="alt text" />
                <img className={styles.brandLogo} src={'/assets/c7a6a4ff7f7a3cc029f96d424ea54fe5.png'} alt="alt text" />
                <img className={styles.brandLogo} src={'/assets/a8879a4511adb43fe1c18cb878df28d0.png'} alt="alt text" />
                <img className={styles.brandLogo} src={'/assets/3eb868dd0394f1d9a557042add30ce43.png'} alt="alt text" />
              </div>
            </div>

            <div className={styles.supportColumn}>
              <div className={styles.supportContent}>
                <h2 className={styles.columnTitle}>Підтримка</h2>
               
              </div>

              <button className={styles.contactBtn}>
                {/* TODO */}
                Написати
              </button>
            </div>
          </div>
        </div>

        <div className={styles.orderProcessingInfo}>
          <p className={styles.orderProcessingText}>Обробка онлайн замовлень кожного дня </p>
        </div>
      </footer>
    </section>
  );
}

