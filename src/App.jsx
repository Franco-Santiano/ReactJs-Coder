import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';


function App() {
  return (
    <BrowserRouter>

    <div className='App'>
    <NavBar/>

    <Routes>
      <Route  path='/' element={<ItemListContainer/>}/>
      <Route path='/itemList/:categoria' element={<ItemListContainer/>}/>
      <Route  path='/itemDetailContainer/:id' element={<ItemDetailContainer/>}/>
      <Route path='/aboutUs' element={<AboutUs/>}/>
      <Route path='*' element={<h1>404 Not Found</h1>}/>
    </Routes>

    </div>

    </BrowserRouter>

  );

}

export default App;
