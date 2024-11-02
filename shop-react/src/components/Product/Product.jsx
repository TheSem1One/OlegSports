import React from 'react';

import cn from 'classnames';

import styles from './index.module.scss';
import { Link } from 'react-router-dom';

export const Product = ({
  _id,
  nameOfProduct,
  typeOfProduct,
  imageUrl,
  price,
  brandOfProduct,
  seriesOfProduct,
  sexOfProduct,
  color,
  material,
  size,
  isFullPost,
  isLoading,
}) => {
  if (isLoading) {
    return;
  }
  return isFullPost ? (
    <div className={cn(styles.root, 'productstore')}>
      <div className={styles.flex_col}>
        <div className={styles.flex_col1}>
          <div className={styles.content_box2}>
            <div className={styles.flex_row2}>
              <div className={styles.text}>Чоловіки</div>
              <div className={styles.text}>
                Жінки
                <br />
              </div>
              <div className={styles.text}>Діти</div>
              <div className={styles.text}>Блог</div>
              <div className={styles.text}>Розпродаж</div>
              <input type='text' className={styles.content_box} placeholder='Пошук....' />
            </div>
          </div>
        </div>

        <div className={styles.flex_col2}>
          <div className={styles.flex_row3}>
            <img
              className={styles.image9}
              src={imageUrl}
              alt={nameOfProduct} />

            <div className={styles.flex_col3}>
              <div className={styles.content_box3}>
                <div className={styles.flex_col4}>
                  <div className={styles.flex_col5}>
                    <div className={styles.flex_col1}>
                      <h2 className={styles.big_title}>{nameOfProduct}</h2>
                    </div>

                    <div className={styles.flex_col6}>



                      <h2 className={styles.big_title}>Розмір: {size}</h2>
                    

                      <div className={styles.flex_row4}>


                      </div>
                    </div>
                  </div>

                  <div className={styles.flex_row6}>
                    <h2 className={styles.big_title}>{price}₴</h2>
                    <button className={styles.btn}>
                      {/* TODO */}
                      Дадоти у кошик
                    </button>
                    <img
                      className={styles.image10}
                      src={'/assets/87cfb2e53305bc0388968309209569b5.svg'}
                      alt="alt text"
                    />
                  </div>
                </div>
              </div>

              <div className={styles.flex_col8}>
                <h2 className={styles.big_title}>Характеристика</h2>
                  <h3 className={styles.text2}>Вид товару: {typeOfProduct}</h3>
                  <h3 className={styles.text2}>Бренд: {brandOfProduct}</h3>
                  <h3 className={styles.text2}>Серія: {seriesOfProduct}</h3>
                  <h3 className={styles.text2}>Стать: {sexOfProduct}</h3>
                  <h3 className={styles.text2}>Колір: {color}</h3>
                  <h3 className={styles.text2}>Матеріал: {material}</h3>
                
                
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  ) : (
    <div className={styles.heroImage1}>
      <img
        className={styles.heroImage1}
        src={imageUrl}
        alt={nameOfProduct} />
      <Link to={`/product/${_id}`} className={styles.productInfo}>
        <h3 className={styles.productInfo}>{nameOfProduct}</h3>
      </Link>
    </div>

  )
}
