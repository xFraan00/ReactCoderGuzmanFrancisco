
import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ContenedorItems from './componentes/ContenedorItems/ContenedorItems'
import CarritoDeCompras from './componentes/CarritoDeCompras/CarritoDeCompras'

function App () {
  return(
  <>
  <NavBar />
  <ContenedorItems greeting={"Bienvenido"}/>
  </>
  )
}
export default App