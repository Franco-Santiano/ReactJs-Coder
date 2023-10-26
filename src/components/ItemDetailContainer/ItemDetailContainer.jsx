import {useState, useEffect} from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../Services/Firebase/config';


export const ItemDetailContainer = ({stock}) => {

    const [detalle, setDetalle] = useState(null)
    const navId = useParams().id;

    useEffect(()=>{
        const productoUnico = doc(db, "productos", navId);
        getDoc(productoUnico)
        .then((snapshot)=>{
            setDetalle({
                ...snapshot.data(), id: snapshot.id
            });
            });
    },[navId]);

    return (
        <div className=''>
            <ItemDetail stock={stock} {...detalle}/>
        </div>
    )
}