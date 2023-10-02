import { useState } from "react"

const ItemCounter =({stock,className}) => {
    const [number, setNumber] = useState(0)

    function sumar(){
        number < stock && setNumber(number + 1);
    }
    function restar(){
        number >=1 && setNumber(number-1);
    }

    return(
        <>
        {
        number >= stock ? <button className={`btn btn-dark disabled ${className}`} onClick={sumar}>+</button>:<button className={`btn btn-dark  ${className}`} onClick={sumar}>+</button>
        }
        <span>{number}</span>
        {
        number > 0? <button className={`btn btn-dark ${className}`} onClick={restar}>-</button>:<button className={`btn btn-dark disabled ${className}`} onClick={restar}>-</button>
        }
        <br/>
        <button className={`btn btn-dark ${className}`}>Agregar Al Carrito</button>
        </>
    )
}

export default ItemCounter;