import React, { useState } from "react";
import Swal from 'sweetalert2';
import Clases from "./CheckOutForm.module.css";

const CheckOutForm = ({ onCreate }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const handleConfirm = (event) => {
        event.preventDefault();

        Swal.fire({
            title: 'Confirmar compra',
            text: '¿Estás seguro de proceder con la compra?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Sí, comprar',
            cancelButtonText: 'Cancelar',
            customClass: {
                confirmButton: 'button confirm',
                cancelButton: 'button cancel',
            },
        }).then((result) => {
            if (result.isConfirmed) {
                const userData = {
                    name,
                    phone,
                    email
                }
                onCreate(userData);
            }
        });
    }

    return (
        <div className={Clases.container}>
            <form onSubmit={handleConfirm} className={Clases.form}>
                <label className={Clases.label}>
                    Nombre
                    <input
                        type="text"
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                        className={Clases.input}
                    />
                </label>
                <label className={Clases.label}>
                    Teléfono
                    <input
                        type="text"
                        value={phone}
                        onChange={({ target }) => setPhone(target.value)}
                        className={Clases.input}
                    />
                </label>
                <label className={Clases.label}>
                    Email
                    <input
                        type="text"
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                        className={Clases.input}
                    />
                </label>
                <div>
                    <button type="submit" className={Clases.button}>
                        Comprar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CheckOutForm;
