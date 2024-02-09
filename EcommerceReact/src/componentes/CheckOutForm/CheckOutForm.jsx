import React, { useState } from "react"; 
import Clases from "./CheckOutForm.module.css"; 

const CheckOutForm = ({ onCreate }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const handleConfirm = (event) => {
        event.preventDefault();

        const userData = {
            name,
            phone,
            email
        }
        onCreate(userData);
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
