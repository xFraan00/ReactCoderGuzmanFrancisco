import CarritoDeCompras from "../CarritoDeCompras/CarritoDeCompras";
import Estilos from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={Estilos.Barra}>
      <h1 className={Estilos.Logo}>Estim</h1>
      <div className={Estilos.Botones}>
        <button>Ofertas</button>
        <button>Pc Games</button>
        <button>Consolas</button>
        <button>Contacto</button>
        <CarritoDeCompras/>
      </div>
    </nav>
  );
};

export default NavBar;
