import React, { useState } from 'react';
import cn from 'classnames';
import styles from './index.module.scss';
import { Login } from '../../components/Login/login';
import { Reg } from '../../components/Register/register';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../../redux/slices/auth';
import { Navigate } from 'react-router-dom';

export const Auth=()=> {
  const [isLogin, setIsLogin] = useState({
    isLogin: false,
  });
  const isAuth = useSelector(selectIsAuth);
  if(isAuth){
    return <Navigate to ='/profile'/>
  }
  return (
    <section className={cn(styles.mainSection, 'untitled-page')}>
      {/* Main content section */}

      <div className={styles.userActionsContainer}>
        <div className={styles.authActions}>
          <p className={isLogin ? styles.loginLink : styles.registerLink} onClick={() => setIsLogin(false)} disabled={!isLogin}>Реєстрація</p>
          <p className={!isLogin ? styles.loginLink : styles.registerLink} onClick={() => setIsLogin(true)} disabled={isLogin}>Вхід</p>
        </div>
      </div>
      {isLogin ? (<Login />) : (<Reg />)}
    </section>
  );
}

