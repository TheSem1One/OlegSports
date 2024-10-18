import React from 'react';
import cn from 'classnames';

import styles from './index.module.scss';

export function Home(props) {
  return (
    <section className={cn(styles.mainContainer, props.className, 'home')}>
      {/* Main content section */}

      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <h1 className={styles.brandTitle}>
            Olega Sports
            <br />
          </h1>
          <p className={styles.workingHours}>ПН-ПТ:   8:00-18:00</p>
          <p className={styles.phoneNumber}>0 992-347-658</p>

          <div className={styles.socialIcons}>
            <img className={styles.socialIcon1} src={'/assets/f1ce2d4da1cf4f6b7737749bc4f5c5bb.svg'} alt="alt text" />
            <img className={styles.socialIcon2} src={'/assets/05036330f63116d87897c22a8029f522.svg'} alt="alt text" />
            <img className={styles.socialIcon3} src={'/assets/4a607b03606ef7f0b48b19bd00488fb5.svg'} alt="alt text" />
          </div>
        </div>
      </header>

      <nav className={styles.navigationContainer}>
        <div className={styles.mainMenu}>
          {/* Main navigation menu */}
          <a className={styles.menLink}>Чоловіки</a>
          <a className={styles.womenLink}>
            Жінки
            <br />
          </a>
          <a className={styles.kidsLink}>Діти</a>
          <a className={styles.blogLink}>Блог</a>
          <a className={styles.saleLink}>Розпродаж</a>

          <div className={styles.searchContainer}>
            <input className={styles.searchContainer}
            type='text'
            placeholder='Пошук...'/>
          </div>
        </div>
      </nav>

      <section className={styles.heroSection}>
        <div className={styles.heroImages}>
          <img className={styles.heroImage1} src={'/assets/616b77b1eb39c26e791aaf641075829c.png'} alt="alt text" />
          <img className={styles.heroImage2} src={'/assets/27925c773b583ad9e47304af638de8b7.png'} alt="alt text" />
          <img className={styles.heroImage3} src={'/assets/5f98ae54f176bad090a4a449b18bfb1d.png'} alt="alt text" />
        </div>

        <div className={styles.colorPalette}>
          <img className={styles.paletteImage} src={'/assets/2c03cad450412fa515cc9e6e88b174a4.png'} alt="alt text" />
          <div className={styles.colorSwatch1} />
          <div className={styles.colorSwatch2} />
          <div className={styles.colorSwatch3} />
          <div className={styles.colorSwatch4} />
        </div>
      </section>

      <section className={styles.promotionalSection}>
        {/* Promotional products section */}
        <h2 className={styles.promotionalTitle}>Акційні товари</h2>

        <div className={styles.productGrid}>
          {/* Grid of promotional products */}

          <article className={styles.productCard1}>
            <img className={styles.productImage1} src={'/assets/345ba68d91a3b937e6f4a5d014dbe137.png'} alt="alt text" />
            <p className={styles.productSku1}>Артикуль CH-523-345</p>
            <p className={styles.productName1}>Спортивний костюм Dolche(синій)</p>
          </article>

          <article className={styles.productCard2}>
            <img className={styles.productImage2} src={'/assets/5417c5e7865f5d7e90c94f07f4f4b733.png'} alt="alt text" />
            <p className={styles.productSku2}>Артикуль CH-523-534</p>
            <p className={styles.productName2}>Спортивний костюм Dolche(класік)</p>
          </article>

          <article className={styles.productCard3}>
            <img className={styles.productImage3} src={'/assets/6f6a4be42e83a172387b32acd721e610.png'} alt="alt text" />
            <p className={styles.productSku3}>Артикуль CH-523-544</p>
            <p className={styles.productName3}>Спортивна форма для футболу Bublle</p>
          </article>

          <article className={styles.productCard4}>
            <img className={styles.productImage4} src={'/assets/a131b0ef148c769e33f1fc12055488ad.png'} alt="alt text" />
            <p className={styles.productSku4}>Артикуль CH-523-675</p>
            <p className={styles.productName4}>Спортивний костюм Jerry</p>
          </article>

          <article className={styles.productCard5}>
            <img className={styles.productImage5} src={'/assets/44b15b085aeb6387a1be36581a73cecb.png'} alt="alt text" />
            <p className={styles.productSku5}>Артикуль CH-523-234</p>
            <p className={styles.productName5}>Кросівки Airbud</p>
          </article>

          <article className={styles.productCard6}>
            <img className={styles.productImage6} src={'/assets/925a124a7717e1455ebcd46e4a3c6106.png'} alt="alt text" />
            <p className={styles.productSku6}>Артикуль CH-523-856</p>
            <p className={styles.productName6}>Спортивний костюм Jerry</p>
          </article>
        </div>
      </section>

      <section className={styles.footballPromoSection}>
        <img
          className={styles.footballPromoImage}
          src={'/assets/a533fc49450bc39dee2a5b43c38b23ea.png'}
          alt="alt text"
        />
        <p className={styles.footballPromoText}>Все для футболу</p>
      </section>

      <section className={styles.poolPromoSection}>
        <img className={styles.poolPromoImage} src={'/assets/c802a2183283aae94ba1e8c93202cee3.png'} alt="alt text" />
        <p className={styles.poolPromoText}>Все для басейну</p>
      </section>

      <footer className={styles.footerSection}>
        {/* Footer section */}
        <img className={styles.footerDivider} src={'/assets/3d4071c1512c890a890803d27ca20b87.svg'} alt="alt text" />

        <div className={styles.footerContent}>
          <div className={styles.helpColumn}>
            <h3 className={styles.helpTitle}>Допомога</h3>

            <div className={styles.helpLinks}>
              <a className={styles.paymentLink}>Оплата</a>
              <a className={styles.deliveryLink}>Доставка</a>
              <a className={styles.returnsLink}>Повернення</a>
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
  );
}
