import Main from './components/Main';
import MainLayout from './components/MainLayout';
import Home from './components/Home';
import Cart from './components/Cart';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shopping-cart" element={ <MainLayout /> }>
          <Route index element={ <Home /> }></Route>
          <Route path="shop" element={<Main />}></Route>
          <Route path="cart" element={ <Cart /> }></Route>
          <Route 
          path="*"
          element={
            <>
              <div className="title-container">
                <h2 className="title is-1">Whoopsie.......... You seem lost..........</h2>
              </div>
              <p className="content">I think you should start by clicking on the big title or navigation bar above!</p>
            </>
          }></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
