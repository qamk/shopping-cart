import Main from './components/Main';
import MainLayout from './components/MainLayout';
import Home from './components/Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="home" element={ <Home /> }></Route>
          <Route path="shop" element={<Main />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
