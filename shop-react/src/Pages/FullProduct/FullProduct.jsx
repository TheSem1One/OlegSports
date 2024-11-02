import React from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../components/Product/Product";
import axios from "../../axios";

export const FullProduct=()=> {
    const [data, setData] = React.useState(true);

    const { _id } = useParams();

    React.useEffect(() => {
        axios.get(`/products/${_id}`)
            .then(res => {
                setData(res.data);
            })
            .catch((err) => {
                console.warn(err);
                alert("Помилка отримання продукту")
            });
    })
    return (
        <>
            <Product
                _id={data._id}
                isFullPost={true}
                nameOfProduct={data.nameOfProduct}
                typeOfProduct={data.typeOfProduct}
                imageUrl={data.imageUrl}
                price={data.price}
                brandOfProduct={data.brandOfProduct}
                seriesOfProduct={data.seriesOfProduct}
                sexOfProduct={data.sexOfProduct}
                color={data.color}
                material={data.material}
                size={data.size}

            />
        </>
    );
}