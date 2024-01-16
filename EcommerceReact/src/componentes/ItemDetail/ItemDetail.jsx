import ItemCount from "../ItemCount/ItemCount";
import Clase from  "../ItemDetail/ItemDetail.module.css"

const Itemdetail = ({id, title, Img, category, description, price, stock}) =>{
    return(
    <div className={Clase.Container}>
        <article className={Clase.Card}>
        <picture className={Clase.img}>
            <img src={Img} alt={`Imagen de ${title}`} />
        </picture>
        <div className={Clase.CardBody}>
        <section className={Clase.Descripcion}>
            <p className={Clase.Title}>
                {title}
            </p>
            <div className={Clase.Texto}>
            <p>
            <strong>Precio: </strong>  
                ${price}
            </p>
            <p>
            <strong>Stock disponible: </strong> 
            {stock}
            </p>
            </div>
            <p className={Clase.Texto}>
                 {description}
            </p>
        </section>
        <footer className={Clase.Footer}>
        <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad Agregada",quantity)}/>
        </footer>
        </div>
    </article>
</div>
    )
}

export default Itemdetail