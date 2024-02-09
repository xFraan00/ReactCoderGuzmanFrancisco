import React, { useState, useContext } from "react";
import CheckoutForm from "../CheckOutForm/CheckOutForm";
import { Timestamp, writeBatch, collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { CartContext } from "../../context/CartContext";
import Clases from "../CheckOut/CheckOut.module.css";

const CheckOut = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState("");
    const { cart, clearCart } = useContext(CartContext);

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);
        try {
            const objOrder = {
                buyer: { name, phone, email },
                date: Timestamp.fromDate(new Date())
            };
            const batch = writeBatch(db); 

            const outOfStock = [];

            const ids = cart.map(prod => prod.id); 

            const productsRef = collection(db, "products");

            const productsAddedFromFirestore = await getDocs(query(productsRef, where("id", "in", ids)));

            const { docs } = productsAddedFromFirestore;

            docs.forEach(doc => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;

                const productsAddedToCart = cart.find(prod => prod.id === doc.id);
                const prodQuantity = productsAddedToCart?.quantity;

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }
            });

            if (outOfStock.length === 0) {
                await batch.commit();

                const orderRef = collection(db, "orders");

                const orderAdded = await addDoc(orderRef, objOrder);

                setOrderId(orderAdded.id);
                clearCart();
            } else {
                console.error("Hay productos fuera de stock");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <h1 className={Clases.titulo}>Se está generando su orden...</h1>;
    }

    if (orderId) {
        return <h1 className={Clases.titulo}>El id de su orden es: {orderId}</h1>;
    }

    return (
        <div className={Clases.Contenedor}>
            <h1 className={Clases.titulo}>Finaliza tu Compra</h1>
            <CheckoutForm onCreate={createOrder} />
        </div>
    );
};

export default CheckOut;
