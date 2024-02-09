import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import Clase from "../ItemDetail/ItemDetail.module.css";
import { CartContext } from "../../context/CartContext";

const Itemdetail = ({ id, title, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem } = useContext(CartContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);

        const item = {
            id,
            title,
            price
        };

        addItem(item, quantity);
    };

    if (loading) {
        return <h2 className={Clase.Loading}>Cargando...</h2>;
    }

    return (
        <div className={Clase.Container}>
            <article className={Clase.Card}>
                <picture className={Clase.img}>
                    <img src={img} alt={`Imagen de ${title}`} />
                </picture>
                <div className={Clase.CardBody}>
                    <section className={Clase.Descripcion}>
                        <p className={Clase.Title}>{title}</p>
                        <div className={Clase.Texto}>
                            <p><strong>Precio: </strong>${price}</p>
                            <p><strong>Stock disponible: </strong>{stock}</p>
                            <p><strong>Plataforma: </strong>{category}</p>
                        </div>
                        <p className={Clase.Texto}>{description}</p>
                    </section>
                    <footer className={Clase.Footer}>
                        {quantityAdded > 0 ? (
                            <Link to="/Cart" className={Clase.Boton}>Terminar Compra</Link>
                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                        )}
                        {quantityAdded > 0 && <Link to="/" className={Clase.Boton}>Seguir Comprando</Link>}
                    </footer>
                </div>
            </article>
        </div>
    );
};

export default Itemdetail;
