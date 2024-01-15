import Clase from "./Item.module.css"
import { Link } from 'react-router-dom'

const item = ({id, title, img, price, stock}) =>{
    return(
        <article className={Clase.Card}>
            <header>
                <h2 className={Clase.tittle}>
                    {title}
                </h2>
            </header>
            <picture className={Clase.img}>
                <img src={img} alt="" />
            </picture>
            <section>
                <p className={Clase.Texto}>
                    Precio: ${price}
                </p>
                <p className={Clase.Texto}>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className={Clase.Texto}>
                <Link to={`/item/${id}`} className="Option"><button>Ver Detalle</button></Link>
            </footer>
        </article>
    )
}

export default item
