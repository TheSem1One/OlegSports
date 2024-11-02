import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import Button from "@mui/material/Button";
import styles from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectIsAuth } from '../../redux/slices/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from "../../axios.js";

export const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const { data } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      return navigate("/");
    }
  }, []);

  const inputFileRef = React.useRef(null);
  const [save, setSave] = useState(true);
  const [changePhoto, setChangePhoto] = useState(true);
  const [user, setUser] = useState({
    imageUrl: '',
  });

  const onClickLogout = () => {
    if (window.confirm('Ви точно хочете вийти?')) {
      dispatch(logout());
      window.localStorage.removeItem('token');
    }
  };

  const handleChange = async (e) => {
    const { type, files } = e.target;

    if (type === 'file') {
      try {
        const formData = new FormData();
        const file = files[0];
        formData.append('image', file);

        const { data } = await axios.post('/uploads', formData);
        console.log(data);
        setUser((prevUser) => ({
          ...prevUser,
          imageUrl: data.url,
        }));
        setChangePhoto(false);
        setSave(false);
      } catch (err) {
        console.warn(err);
        alert('Помилка завантаження фотографії');
      }
    }
  };

  const onSubmit = async () => {
    try {
      await axios.patch('/profile', user);
      window.location.reload();
    } catch (err) {
      console.warn(err);
    }
  };

  const onClickRemoveImage = () => {
    setUser((prevUser) => ({
      ...prevUser,
      imageUrl: '',
    }));
    setChangePhoto(true);
    setSave(true);
  };
  if (!localStorage.getItem('token') && !isAuth) {
    return <Navigate to='/' />
  }
  return (
    <main className={cn(styles.mainContainer, 'profile')}>
      <section className={styles.accountSection}>
        <div className={styles.accountContent}>
          <nav className={styles.accountMenu}>
            <h2 className={styles.accountMenuTitle}>Мій кабінет</h2>
            <p className={styles.generalInfoLink}>Мої замовлення</p>
            <p className={styles.generalInfoLink}>Список бажаного</p>
            <p className={styles.generalInfoLink}>Загальна інформація</p>
            <p className={styles.generalInfoLink}>Додавання продуктів</p>
            {data?._id === '671b725c0852528656d2d4cc' && (
              <Link to='/create'>
                <p className={styles.generalInfoLink}>Створити новий продукт</p>
              </Link>
            )}
            <p onClick={onClickLogout} className={styles.logoutLink}>Вихід</p>
          </nav>

          <div className={styles.accountDetails}>
            <h2 className={styles.accountDetailsTitle}>Загальна інформація</h2>
            <div className={styles.personalInfo}>
              {data && data.fullName ? (
                <p>ПІ: {data.fullName}</p>
              ) : (
                <p>ПІ: </p> // or just leave it out entirely
              )}

              {data && data.email ? (
                <p>Email: {data.email}</p>
              ) : (
                <p>Email: </p> // or just leave it out entirely
              )}

            </div>
          </div>
        </div>

        <figure className={styles.userProfilePic}>
          {data && data.imageUrl ? (<img
            className={styles.profileImage}
            src={changePhoto ? `http://localhost:4444${data.imageUrl}` : `http://localhost:4444${user.imageUrl}`}
            alt="alt text"
          />) : (<></>)}
          <Button
            classes={{ root: styles.buttons }}
            onClick={() => inputFileRef.current.click()}
            variant="outlined"
            size="large"
          >
            Завантажити Фото Продукту
          </Button>
          <input ref={inputFileRef} type='file' onChange={handleChange} hidden />
          {!save && (
            <div className={styles.SDV}>
              <Button
                type='submit'
                classes={{ root: styles.buttons }}
                variant="contained"
                onClick={onSubmit}
              >
                Зберегти
              </Button>
              <Button
                classes={{ root: styles.buttons }}
                variant="contained"
                color='error'
                onClick={onClickRemoveImage}
              >
                Відхилити зміни
              </Button>
            </div>
          )}
        </figure>
      </section>
    </main>
  );
};
