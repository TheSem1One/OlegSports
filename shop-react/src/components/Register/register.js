import React from 'react';
import styles from './index.module.scss';

export function Reg(){
    return(
        <div className={styles.userActionsContainer}>
         <div className={styles.cartIndicator}>
          <input 
          className={styles.cartItem} 
          type='text' 
          name='Full Name'
          placeholder='Введіть ПІБ'
          />
          <input className={styles.cartItem}
           type='email' 
           name='email'
           placeholder='Введіть пошту'
          />
          <input className={styles.cartItem}
           type='password' 
           name='password'
           placeholder='Введіть пароль'
           minLength={8} />
        </div>

        <button className={styles.cartTotal} > 
          Реєстрація
        </button>    
        </div>   

)}