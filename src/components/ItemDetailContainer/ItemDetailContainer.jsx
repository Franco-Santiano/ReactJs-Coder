import {useState, useEffect} from 'react';
import { obtenerProductosId } from '../../mock/productos';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';



export const ItemDetailContainer = ({stock}) => {

    const [detalle, setDetalle] = useState(null)
    const navId = useParams().id;

    useEffect(()=>{
        obtenerProductosId(Number(navId))
        .then(response =>{
            setDetalle(response)
        })
        .catch(error =>{
            console.error(error)
        })
    },[navId]);

    return (
        <div className=''>
            <ItemDetail stock={stock} {...detalle}/>
        </div>
    )
}