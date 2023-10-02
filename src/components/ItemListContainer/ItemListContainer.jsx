import { useEffect, useState } from 'react';
import  {obtenerProductos}  from '../../mock/productos';
import {ItemList} from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';



const ItemListContainer = () =>{

    const [productos,setProductos]= useState([]);
    const navCategoria = useParams().categoria;

    useEffect(()=>{
        obtenerProductos()
        .then(response =>{
            navCategoria? setProductos( response.filter((producto) => producto.categoria === navCategoria) ): setProductos(response);
        })
        .catch(error =>{
            console.error(error)
        })
    },[navCategoria])

    return(
        <section className="m-5">
            <ItemList productos={productos}/>
        </section>
    );
};

export default ItemListContainer;