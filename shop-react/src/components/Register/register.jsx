import React from 'react';
import styles from './index.module.scss';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { fetchAuth, fetchRegister } from '../../redux/slices/auth';

export const Reg=()=> {
  const distpatch = useDispatch();
  const { register, handleSubmit, setError, formState: { errors, isValid }, } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
    },
  });
  const onSubmit = async (values) => {
    const reguser = await distpatch(fetchRegister(values));
    window.localStorage.setItem('token', reguser.payload.token);
  };

  return (
    <div className={styles.userActionsContainer}>

      <form className={styles.cartIndicator} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={styles.cartItem}
          type='text'
          name='fullName'
          placeholder='Введіть ПІБ'
          {...register('fullName', { required: 'Вкажіть ПІ' })}
        />
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
          {...register('password', { required: 'Вкажіть пароль ' })}
          minLength={8} />


        <button type='submit' className={styles.cartTotal} >
          Реєстрація
        </button>
      </form>
    </div>

  )
}