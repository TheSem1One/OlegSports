import React from 'react';
import styles from './index.module.scss';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";
import { fetchAuth, selectIsAuth } from '../../redux/slices/auth';
export const Login=()=> {
  const distpatch = useDispatch();
  const { register, handleSubmit, setError, formState: { errors, isValid }, } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const onSubmit = async (values) => {
    const user = await distpatch(fetchAuth(values));
    window.localStorage.setItem('token', user.payload.token);
  };


  return (
    <div className={styles.userActionsContainer}>
      <form className={styles.cartIndicator} onSubmit={handleSubmit(onSubmit)}>
        <input className={styles.cartItem}
          type='email'
          name='email'
          placeholder='Введіть пошту'
          {...register('email', { required: 'Вкажіть пошту ' })}
        />
        <input className={styles.cartItem}
          type='password'
          name='password'
          placeholder='Введіть пароль'
          minLength={8}
          {...register('password', { required: 'Вкажіть пароль ' })}
        />

        <button type='submit' className={styles.cartTotal} >
          Вхід
        </button>
      </form>
    </div>

  )
}