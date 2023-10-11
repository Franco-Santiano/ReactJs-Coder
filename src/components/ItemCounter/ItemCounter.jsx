import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";



const ItemCounter =({stock,className, id, nombre, precio}) => {
    const [number, setNumber] = useState(0)
    const [cantidad, setCantidad] = useState(0)
    const {agregarProd} = useContext(CartContext);

    function sumar(){
        number < stock && setNumber(number + 1);
    }
    function restar(){
        number >=1 && setNumber(number-1);
    }
  
    const onAdd = (cantidad) => {
        setCantidad(cantidad)

        const producto = {
            id, nombre, precio
        }
        agregarProd(producto, cantidad)
    };
  

    return(
        <>
        {
        number >= stock ? <button className={`btn btn-dark disabled ${className}`} onClick={sumar}>+</button>:<button className={`btn btn-dark  ${className}`} onClick={sumar}>+</button>
        }
        { number > 0 ? <span className="btn btn-dark">{number}</span>: <span className="btn">{number}</span> }
        {
        number > 0? <button className={`btn btn-dark ${className}`} onClick={restar}>-</button>:<button className={`btn btn-dark disabled ${className}`} onClick={restar}>-</button>
        }
        <br/>
        {number === 0? <button className={`btn btn-dark disabled ${className}`} onClick={()=> onAdd(cantidad)} >Agregar Al Carrito</button>:<button className={`btn btn-dark  ${className}`} onClick={()=> onAdd(number)} >Agregar Al Carrito</button>}
        { number === 0 ? <Link to={'/cart'}  className="btn btn-dark disabled">Comprar</Link>:<Link to={'/cart'}  className="btn btn-dark ">Comprar</Link> }
        </>
    )
}

export default ItemCounter;