import Clase from "./Item.module.css"
import { Link } from 'react-router-dom'

const item = ({id, title, Img, price, stock}) =>{
    return(
    <div className={Clase.CardConteiner}>  
        <article className={Clase.Card}>
            <header>
                <h2 className={Clase.title}>
                    {title}
                </h2>
            </header>
            <picture className={Clase.img}>
                <img src={Img} alt={`Imagen de ${title}`} />
            </picture>
            <section  className={Clase.Texto}>
                <p>
                <strong>Precio:</strong>   ${price}
                </p>
                <p>
                <strong>Stock disponible:</strong> {stock}
                </p>
            </section>
            <footer className={Clase.Texto}>
                <Link to={`/item/${id}`} className={Clase.Option}><button>Ver Detalle</button></Link>
            </footer>
        </article>
        </div>  
    )
}

export default item
