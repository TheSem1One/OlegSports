import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";


import "easymde/dist/easymde.min.css";
import styles from "./index.module.scss";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/slices/auth";
import { Navigate } from "react-router-dom";
import axios from "../../axios.js";

export const CreateProduct = () => {
    const isAuth = useSelector(selectIsAuth);
    const [isLoading, setLoading] = React.useState(false)
    const inputFileRef = React.useRef(null)
    const [product, setProduct] = useState({
        nameOfProduct: '',
        typeOfProduct: '',
        imageUrl: '',
        price: '',
        brandOfProduct: '',
        seriesOfProduct: '',
        sexOfProduct: '',
        color: '',
        material: '',
        size: '',
    });
    
    const handleChange = async (e) => {
        const { name, value, type, files } = e.target;
    
        if (type === 'file') {
            try {
                const formData = new FormData();
                const file = files[0];
                formData.append('image', file);
    
                const { data } = await axios.post('/uploads', formData);
                setProduct((prevProduct) => ({
                    ...prevProduct,
                    imageUrl: data.url,
                }));
            } catch (err) {
                console.warn(err);
                alert('Помилка завантаження фотографії');
            }
        } else {
            setProduct((prevProduct) => ({
                ...prevProduct,
                [name]: value,
            }));
        }
    };
    
    const onClickRemoveImage = () => {
        setProduct((prevProduct) => ({
            ...prevProduct,
            imageUrl: '',
        }));
    };
    const onSubmit = async()=>{
        try{
            setLoading(true);
            await axios.post('/products',product)
        }catch(err){
            console.warn(err)
        }
    }

    if (!window.localStorage.getItem('token') && !isAuth) {
        return <Navigate to='/' />
    }

    return (
        <Paper style={{ padding: 30 }}>
            <Button classes={{root: styles.buttons}} onClick={() => inputFileRef.current.click()} variant="outlined" size="large">
                Завантажити Фото Продукту
            </Button>
            <input ref={inputFileRef} type='file' onChange={handleChange} hidden />
            {product.imageUrl &&(
                <>
                    <Button classes={{root: styles.buttons}} variant="contained" color="error" onClick={onClickRemoveImage}>
                        Видалити
                    </Button>
                    <img className={styles.image} src={`http://localhost:4444${product.imageUrl}`} alt={product.nameOfProduct}/>
                </>
            )}
            <br />
            <br />
            <div className={styles.wrap}>

                <TextField
                    name="nameOfProduct"
                    classes={{ root: styles.wrapin }}
                    variant="standard"
                    placeholder="Повна назва продукту ....."

                    onChange={handleChange}
                />
                <TextField
                    name="typeOfProduct"
                    classes={{ root: styles.wrapin }}
                    variant="standard"
                    placeholder="Тип Продукту ...."

                    onChange={handleChange}
                />
                <TextField
                    name="price"
                    classes={{ root: styles.wrapin }}
                    variant="standard"
                    placeholder="Ціна ....."

                    onChange={handleChange}
                />
                <TextField
                    name="brandOfProduct"
                    classes={{ root: styles.wrapin }}
                    variant="standard"
                    placeholder="Бренд ...."

                    onChange={handleChange}
                />
                <TextField
                    name="seriesOfProduct"
                    classes={{ root: styles.wrapin }}
                    variant="standard"
                    placeholder="Серія продукту....."

                    onChange={handleChange}
                />
                <TextField
                    name="sexOfProduct"
                    classes={{ root: styles.wrapin }}
                    variant="standard"
                    placeholder="Стать ..."

                    onChange={handleChange}
                />
                <TextField
                    name="color"
                    classes={{ root: styles.wrapin }}
                    variant="standard"
                    placeholder="Колір ..."

                    onChange={handleChange}
                />
                <TextField
                    name="material"
                    classes={{ root: styles.wrapin }}
                    variant="standard"
                    placeholder="Матеріал ..."

                    onChange={handleChange}
                />
                <TextField
                    name="size"
                    classes={{ root: styles.wrapin }}
                    variant="standard"
                    placeholder="Розміри  ..."

                    onChange={handleChange}
                />

            </div>
            <div className={styles.buttons}>
                <Button onClick={onSubmit} size="large" variant="contained">
                    Опублікувати
                </Button>
                <Button size="large">Відміна</Button>
            </div>
        </Paper>
    );
};