import React from 'react';
import styles from './index.module.scss';

export function Login(){
    return(
    <div className={styles.userActionsContainer}>
    <div className={styles.cartIndicator}>
      <input className={styles.cartItem}
       type='email' 
       name='Email'
       placeholder='Введіть пошту'
      />
      <input className={styles.cartItem}
       type='password' 
       name='password'
       placeholder='Введіть пароль'
       minLength={8} />
    </div>

    <button className={styles.cartTotal} > 
      Вхід
    </button>
  </div>
  
)}