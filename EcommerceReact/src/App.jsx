import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './componentes/NavBar/NavBar';
import ContenedorItems from './componentes/ContenedorItems/ContenedorItems';
import ItemDetailContainer from "./componentes/ItemDetailConteiner/ItemDetailConteiner";
import Cart from "./componentes/Cart/Cart"
import CheckOut from "./componentes/CheckOut/CheckOut"
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
          <CartProvider>
            <NavBar />
              <Routes>
                <Route path="/" element={<ContenedorItems />} />
                <Route path="/category/:categoryId" element={<ContenedorItems />} />
                <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/checkout" element={<CheckOut />} />
                <Route path="*" element={<h1>404 NOT FOUND</h1>} />
              </Routes>
          </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
