import ItemCount from "../ItemCount/ItemCount";
import Clase from  "../ItemDetail/ItemDetail.module.css"

const Itemdetail = ({id, title, img, category, description, price, stock}) =>{
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
        <section className={Clase.Descripcion}>
            <p className={Clase.Texto}>
                Precio: ${price}
            </p>
            <p >
                Stock disponible: {stock}
            </p>
            <p className={Clase.Texto}>
                Desctripcion: {description}
            </p>
        </section>
        <footer className={Clase.Footer}>
        <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad Agregada",quantity)}/>
        </footer>
    </article>
    )
}

export default Itemdetail