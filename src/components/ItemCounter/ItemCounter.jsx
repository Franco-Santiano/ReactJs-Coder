import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";



 const ItemCounter =({stock,className, onAdd}) => {
    const [number, setNumber] = useState(0)
    const {cartQuantity} = useContext(CartContext);

    function sumar(){
        number < stock && setNumber(number + 1);
    }
    function restar(){
        number >=1 && setNumber(number-1);
    }

    return(
        <>
        {
        number >= stock ?
        <button className={`btn btn-light opacity-50 disabled ${className}`} onClick={sumar}>+</button>
        :
        <button className={`btn btn-light  ${className}`} onClick={sumar}>+</button>
        }
        { 
        number > 0 ?
        <span className="btn btn-light">{number}</span>
        :
        <span className="btn btn-light opacity-50">{number}</span> }
        {
        number > 0?
        <button className={`btn btn-light ${className}`} onClick={restar}>-</button>
        :
        <button className={`btn btn-light disabled opacity-50 ${className}`} onClick={restar}>-</button>
        }
        <br/>
        {
        number === 0?
        <button className={`btn btn-light opacity-50 disabled ${className}`} >Agregar Al Carrito</button>
        :
        <button className={`btn btn-light  ${className}`} onClick={()=>{
            setNumber(0)
            onAdd(number);}} >Agregar Al Carrito</button>
        }
        { cartQuantity() !== 0 && <Link to={'/cart'}  className="btn btn-success ">Ir al Carrito</Link> }
        </>
    )}

    export default ItemCounter;