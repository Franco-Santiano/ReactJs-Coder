import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <>
    <NavBar link={"#"}/>
    <ItemListContainer className="Item-List m-5" id="list-container" gretting='Hola Gamers!'/>
    </>
  );
}

export default App;
