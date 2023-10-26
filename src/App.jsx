import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import { CartContextProvider } from './context/CartContext';
import { Cart } from './components/Cart/Cart';
import {Checkout} from './components/Checkout/Checkout';



function App() {
  return (
    <CartContextProvider>

    <BrowserRouter>

    <div className='App'>

    <NavBar/>

    <Routes>
      <Route  path='/' element={<ItemListContainer/>}/>
      <Route path='/itemList/:categoria' element={<ItemListContainer/>}/>
      <Route  path='/itemDetailContainer/:id' element={<ItemDetailContainer/>}/>
      <Route path='/aboutUs' element={<AboutUs/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='*' element={<h1>404 Not Found</h1>}/>
    </Routes>

    </div>
    </BrowserRouter>

   

    </CartContextProvider>
  );

}

export default App;
