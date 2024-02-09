import React from 'react';
import Clases from "../CartItem/CartItem.module.css";
import Imagenes from "./assets/trash-bin.png";

const CartItem = ({  title, price, quantity, id, onDelete }) => {
    
    const handleDelete = () => {
        onDelete(id);
    };

    return(
        <div className={Clases.Contenedor} >
            <h5 className={Clases.Texto}>{title}</h5>
            <p className={Clases.Texto}>
                <strong>- Precio: ${price}</strong>
            </p>
            <p className={Clases.Texto}>
                <strong>
                    - Cantidad de unidades: {quantity}
                </strong>
            </p>
            <p className={Clases.Texto}>
                <strong>
                    - Subtotal: $ {price * quantity}
                </strong>
            </p>
            <button onClick={handleDelete}>
                <img src={Imagenes} alt="Eliminar" className={Clases.imagen} />
            </button>
        </div>
    );
};

export default CartItem;
