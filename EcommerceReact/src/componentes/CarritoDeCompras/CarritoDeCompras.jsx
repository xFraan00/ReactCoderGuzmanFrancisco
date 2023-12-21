
import Estilos from "./CarritoDeCompras.module.css";
import Imagen from './asset/carrito.png'

const CarritoDeCompras = () => {
  return (
    <div className={Estilos.ContenedorCarrito}>
      <img className={Estilos.ImagenCarrito} src={Imagen} alt="Carrito de compras" />
      <p className={Estilos.Cantidad}>0</p>
    </div>
  );
}

export default CarritoDeCompras;
