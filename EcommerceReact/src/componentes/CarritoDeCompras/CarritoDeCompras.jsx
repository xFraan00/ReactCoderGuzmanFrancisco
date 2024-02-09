
import React, { useContext } from "react";
import Estilos from "./CarritoDeCompras.module.css";
import Imagen from './asset/carrito.png';
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CarritoDeCompras = () => {
  const { cart } = useContext(CartContext);
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link to="/Cart" className={Estilos.Cantidad}>
      <img className={Estilos.ImagenCarrito} src={Imagen} alt="Carrito de compras" />
      {totalQuantity > 0 && <p className={Estilos.CantidadNumero}>{totalQuantity}</p>}
    </Link> 
  );
}

export default CarritoDeCompras;
