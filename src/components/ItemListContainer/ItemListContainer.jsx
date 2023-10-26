import { useEffect, useState } from 'react';
import {ItemList} from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../Services/Firebase/config';




const ItemListContainer = () =>{

    const [productos,setProductos]= useState([]);
    const navCategoria = useParams().categoria;

    useEffect(()=>{

        const productosColeccion = collection(db,"productos");
        const q = navCategoria ? query(productosColeccion, where("categoria", "==", navCategoria)) : productosColeccion;

        getDocs(q)
        .then((snapshot)=>{
            setProductos(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()})));
        });
    },[navCategoria])

    return(
        <section className="m-5">
            <ItemList productos={productos}/>
        </section>
    );
};

export default ItemListContainer;