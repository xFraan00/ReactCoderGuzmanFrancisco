import Estilos from "./ContenedorItems.module.css"
import Imagen from "./asset/solaire.png"

const ContenedorItems = ({greeting}) => {
    return (
        <div className={Estilos.contenedor}>
        <img className={Estilos.img} src={Imagen} alt="imagen" />
        <h2 className={Estilos.Titulo}>{greeting}</h2>
        </div>
    )
}

export default ContenedorItems