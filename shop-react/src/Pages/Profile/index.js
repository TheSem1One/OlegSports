import React from 'react';
import cn from 'classnames';

import styles from './index.module.scss';

export function Profile(props) {
  return (
    <main className={cn(styles.mainContainer, props.className, 'profile')}>
      <header className={styles.headerContent}>
        {/* Header section with company information and social media links */}

        <div className={styles.headerInfo}>
          <h1 className={styles.companyName}>
            OlegaSports
            <br />
          </h1>
          <p className={styles.workingHours}>ПН-ПТ:   8:00-18:00</p>
          <p className={styles.phoneNumber}>0 992-347-658</p>

          <div className={styles.socialMediaIcons}>
            <img className={styles.socialIcon1} src={'/assets/9ec943654b1ff85a348b039d296dbe5f.svg'} alt="alt text" />
            <img className={styles.socialIcon2} src={'/assets/1feb411b2040db6d96b8f980a1f0730c.svg'} alt="alt text" />
            <img className={styles.socialIcon3} src={'/assets/2ad03cef603cfe548135798c54cfa164.svg'} alt="alt text" />
          </div>
        </div>
      </header>

     

      <section className={styles.accountSection}>
        {/* User account information and management section */}

        <div className={styles.accountContent}>
          <nav className={styles.accountMenu}>
            <h2 className={styles.accountMenuTitle}>Мій кабінет</h2>
            <a className={styles.generalInfoLink}>Мої замовлення</a>
            <a className={styles.generalInfoLink}>Список бажаного</a>
            <a className={styles.generalInfoLink}>Загальна інформація</a>
            <a className={styles.generalInfoLink}>Додавання продуктів</a>
            <a className={styles.logoutLink}>Вихід</a>
          </nav>

          <div className={styles.accountDetails}>
            <h2 className={styles.accountDetailsTitle}>Загальна інформація</h2>

            <div className={styles.personalInfo}>
              <p className={styles.personalInfo}>ПІБ :</p>
              <p className={styles.personalInfo}>Email:</p>
            </div>
          </div>
        </div>

        <figure className={styles.userProfilePic}>
          <img className={styles.profileImage} src={'/assets/42090280498cbbe3252e82f3981e6e0a.png'} alt="alt text" />
          <figcaption className={styles.userInitials}>ВВВ</figcaption>
        </figure>
      </section>

      <footer className={styles.footerSection}>
        {/* Footer section with help, brands, and support information */}
        <img className={styles.footerDivider} src={'/assets/3d4071c1512c890a890803d27ca20b87.svg'} alt="alt text" />

        <div className={styles.footerContent}>
          <div className={styles.helpColumn}>
            <h2 className={styles.helpTitle}>Допомога</h2>

            <nav className={styles.helpLinks}>
              <a className={styles.paymentLink}>Оплата</a>
              <a className={styles.deliveryLink}>Доставка</a>
              <a className={styles.returnsLink}>Повернення</a>
            </nav>
          </div>

          <div className={styles.brandsColumn}>
            <h2 className={styles.brandsTitle}>Бренди</h2>

            <div className={styles.brandLogos}>
              {/* Grid of brand logos */}
              <img className={styles.brandLogo1} src={'/assets/c140c3ac5634add489f8a12cf3e6fa77.png'} alt="alt text" />
              <img className={styles.brandLogo2} src={'/assets/c7a6a4ff7f7a3cc029f96d424ea54fe5.png'} alt="alt text" />
              <img className={styles.brandLogo3} src={'/assets/a8879a4511adb43fe1c18cb878df28d0.png'} alt="alt text" />
              <img className={styles.brandLogo4} src={'/assets/3eb868dd0394f1d9a557042add30ce43.png'} alt="alt text" />
            </div>
          </div>

          <div className={styles.supportColumn}>
            <h2 className={styles.supportTitle}>Підтримка</h2>
            <button className={styles.contactBtn}>
              {/* TODO */}
              Написати
            </button>
          </div>
        </div>
      </footer>

      <div className={styles.orderProcessingInfo}>
        <p className={styles.processingMessage}>Обробка онлайн замовлень кожного дня </p>
      </div>
    </main>
  );
}