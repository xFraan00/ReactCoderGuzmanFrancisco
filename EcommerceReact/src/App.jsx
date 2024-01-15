import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './componentes/NavBar/NavBar';
import ContenedorItems from './componentes/ContenedorItems/ContenedorItems';
import ItemDetailContainer from "./componentes/ItemDetailConteiner/ItemDetailConteiner";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ContenedorItems />} />
          <Route path="/category/:categoryId" element={<ContenedorItems />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
