import React from "react";
import styles from './index.module.scss';

export const Footer=()=>{
    return(
        <section>
        <footer className={styles.footerSection}>
        {/* Footer section */}
        <img className={styles.footerDivider} src={'/assets/3d4071c1512c890a890803d27ca20b87.svg'} alt="alt text" />

        <div className={styles.footerContent}>
          <div className={styles.helpColumn}>
            <h3 className={styles.helpTitle}>Допомога</h3>

            <div className={styles.helpLinks}>
              <p className={styles.paymentLink}>Оплата</p>
              <p className={styles.deliveryLink}>Доставка</p>
              <p className={styles.returnsLink}>Повернення</p>
            </div>
          </div>

          <div className={styles.brandsColumn}>
            <h3 className={styles.brandsTitle}>Бренди</h3>

            <div className={styles.brandLogos}>
              <img className={styles.brandLogo1} src={'/assets/c140c3ac5634add489f8a12cf3e6fa77.png'} alt="alt text" />
              <img className={styles.brandLogo2} src={'/assets/c7a6a4ff7f7a3cc029f96d424ea54fe5.png'} alt="alt text" />
              <img className={styles.brandLogo3} src={'/assets/a8879a4511adb43fe1c18cb878df28d0.png'} alt="alt text" />
              <img className={styles.brandLogo4} src={'/assets/3eb868dd0394f1d9a557042add30ce43.png'} alt="alt text" />
            </div>
          </div>

          <div className={styles.supportColumn}>
            <h3 className={styles.supportTitle}>Підтримка</h3>
            <button className={styles.contactBtn}>
              {/* TODO */}
              Написати
            </button>
          </div>
        </div>
      </footer>

      <div className={styles.orderProcessingInfo}>
        <p className={styles.orderProcessingText}>Обробка онлайн замовлень кожного дня </p>
      </div>
    </section>
    )
}