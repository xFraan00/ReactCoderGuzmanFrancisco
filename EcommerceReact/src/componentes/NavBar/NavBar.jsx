import { NavLink, Link } from "react-router-dom";
import CarritoDeCompras from "../CarritoDeCompras/CarritoDeCompras";
import Estilos from "./NavBar.module.css";


const NavBar = () => {
  return (
    <nav className={Estilos.Barra}>
      <Link to="/"  className={Estilos.Logo}>
      <h1>Estim</h1>
      </Link>
      <div className={Estilos.Botones}>
        <NavLink to={"/category/Steam"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}><button>Steam</button></NavLink>
        <NavLink to={"/category/Xbox"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}><button>Xbox</button></NavLink>
        <NavLink to={"/category/Play"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}><button>Play Station</button></NavLink>
        <CarritoDeCompras/>
      </div>
    </nav>
  );
};

export default NavBar;
