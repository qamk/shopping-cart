import Main from './components/Main';
import MainLayout from './components/MainLayout';
import Home from './components/Home';
import Cart from './components/Cart';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <MainLayout /> }>
          <Route index element={ <Home /> }></Route>
          <Route path="shop" element={<Main />}></Route>
          <Route path="cart" element={ <Cart /> }></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
