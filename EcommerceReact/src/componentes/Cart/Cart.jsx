import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import Clases from "../Cart/Cart.module.css";
import Swal from "sweetalert2";

const Cart = () => {
    const { cart, clearCart, removeItem } = useContext(CartContext);
    
    const handleDeleteItem = (itemId) => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: '¿Deseas eliminar este producto de su carrito?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                removeItem(itemId);
            }
        });
    };

    const handleClearCart = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: '¿Deseas vaciar el carrito?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, vaciar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                clearCart();
            }
        });
    };

    const calculateTotal = () => {
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;
        });
        return total.toFixed(2);
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
                <button onClick={handleClearCart} className={`${Clases.boton} swal2-confirm`}>Limpiar Carrito</button>
                <Link to="/checkout" className={Clases.boton}>Finalizar Compra</Link>
                <Link to="/" className={Clases.boton}>Seguir Comprando</Link>
            </div>
        </div>
    );
};

export default Cart;
