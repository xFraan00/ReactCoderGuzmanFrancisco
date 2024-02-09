import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import Clases from "../Cart/Cart.module.css";

const Cart = () => {
    const { cart, clearCart, removeItem } = useContext(CartContext);
    
    const handleDeleteItem = (id) => {
        removeItem(id);
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    };

    if (cart.length === 0) {
        return (
            <div>
                <h1 className={Clases.titulo}>No hay productos en el carrito</h1>
                <Link to="/" className={Clases.boton}>Productos</Link>
            </div>
        );
    }

    return (
        <div>
            <div>
                {cart.map(item => (
                    <CartItem
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        quantity={item.quantity}
                        id={item.id}
                        onDelete={handleDeleteItem}
                        className={Clases.cartItem}
                    />
                ))}
            </div>
            <p className={Clases.total}>Total: $ {calculateTotal()}</p>
            <div className={Clases.botones}>
            <button onClick={() => clearCart()} className={Clases.boton}>Limpiar Carrito</button>
            <Link to="/checkout" className={Clases.boton}>Finalizar Compra</Link>
            <Link to="/" className={Clases.boton}>Seguir Comprando</Link>
            </div>
        </div>
    );
};

export default Cart;
