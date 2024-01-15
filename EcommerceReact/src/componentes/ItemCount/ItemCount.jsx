import { useState } from 'react';
import Clases from './itemCount.module.css';

const itemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className={Clases.Contador}>
      <div className={Clases.Controles}>
        <button className={Clases.Boton} onClick={decrement}>
          -
        </button>
        <h4 className={Clases.Numero}>{quantity}</h4>
        <button className={Clases.Boton} onClick={increment}>
          +
        </button>
      </div>
      <div>
        <button
          className={Clases.Boton}
          onClick={() => onAdd(quantity)}
          disabled={!stock}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default itemCount;
