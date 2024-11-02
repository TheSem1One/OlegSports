import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import styles from './index.module.scss';
import { fetchProducts } from '../../redux/slices/product.js';
import { Product } from '../../components/Product/Product.jsx';

export const Home=()=> {
  const dispatch = useDispatch();
  const { products } = useSelector(status => status.products)

  const isProductLoading = products.status === 'loading'
  React.useEffect(() => {
    dispatch(fetchProducts());
  },[])
  return (
    <section className={cn(styles.mainContainer,'home')}>
      {/* Main content section */}

      <nav className={styles.navigationContainer}>
        <div className={styles.mainMenu}>
          {/* Main navigation menu */}
          <p className={styles.menLink}>Чоловіки</p>
          <p className={styles.womenLink}> Жінки </p>
          <p className={styles.kidsLink}>Діти</p>
          <p className={styles.blogLink}>Блог</p>
          <p className={styles.saleLink}>Розпродаж</p>

          <div className={styles.searchContainer}>
            <input className={styles.searchContainer}
              type='text'
              placeholder='Пошук...' />
          </div>
        </div>
      </nav>

      <section className={styles.heroSection}>
        <div className={styles.heroImages}>
          {(isProductLoading ? [...Array(5)] : products.items).map((obj, index) =>
            isProductLoading ? (
              <Product key={index} isLoading={true} />
            ) : (
              <Product
                isFullPost={false}
                _id={obj._id}
                nameOfProduct={obj.nameOfProduct}
                typeOfProduct={obj.typeOfProduct}
                imageUrl={obj.imageUrl}
                price={obj.price}
                brandOfProduct={obj.brandOfProduct}
                seriesOfProduct={obj.seriesOfProduct}
                sexOfProduct={obj.sexOfProduct}
                color={obj.color}
                material={obj.material}
                size={obj.size}
              />

            ))
          }

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

     
    </section>
  );
}
