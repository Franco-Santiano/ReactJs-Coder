import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./cart.css"
import {TfiFaceSad} from 'react-icons/tfi'
import CartItem from "../CartItem/CartItem";



export const Cart = () => {
    const {cart, clear, total} = useContext(CartContext)
    
    return (
        <div className="cart-container m-5">
            {cart.length
            ? <div>
                {cart.map((item)=> <CartItem key={item.id} item={item}/>)}
            <div>
                <h3 className="text-light m-3 text-center">Total a pagar = ${total()}</h3>
            </div>
            <div className="d-flex m-3 justify-content-center">
                <button className="btn btn-danger me-1" onClick={clear}>Vaciar Carrito</button>
                <Link to={'/checkout'} className="text-light btn btn-dark ms-1">Terminar Compra</Link>
            </div>
            </div>
            : <div className="d-flex flex-column justify-content-between align-items-center">
                <h3 className="m-5">Tu carrito esta vacio!</h3>
                <Link to={'/'} className="btn btn-dark w-25 m-5">Ir a Comprar</Link>
                <TfiFaceSad className="h-25 w-25 m-5"/>
            </div>}
        </div>

    )
}

