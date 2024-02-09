import { useState } from 'react';
import Swal from 'sweetalert2'; 
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

  const handleAddToCart = () => {
    Swal.fire({
      icon: 'success',
      title: 'Producto Agregado',
      text: `Se ha agregado ${quantity} producto(s) al carrito.`,
      showConfirmButton: false,
      timer: 1500 
    });
    onAdd(quantity);
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
          onClick={handleAddToCart}
          disabled={!stock}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default itemCount;
