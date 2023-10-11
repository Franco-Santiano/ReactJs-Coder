import { useContext } from 'react';
import { PiShoppingCartSimpleBold} from 'react-icons/pi';
import { CartContext } from '../../context/CartContext';

const CartWidget = () =>{

    const {carrito} = useContext(CartContext)

    return(
        <div>
        <PiShoppingCartSimpleBold fill='white' fontSize="2rem"/>
        <span className="badge text-bg-light">{carrito.reduce((acc,p)=>{return acc + p.cantidad},0)}</span>
        </div>
        );
};

export default CartWidget;