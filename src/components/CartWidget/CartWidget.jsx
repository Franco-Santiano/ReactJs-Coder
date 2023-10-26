import { useContext } from 'react';
import { PiShoppingCartSimpleBold} from 'react-icons/pi';
import { CartContext } from '../../context/CartContext';

const CartWidget = () =>{

    const {cartQuantity} = useContext(CartContext)


    return(
        <div>
        <PiShoppingCartSimpleBold fill='white' fontSize="2rem"/>
        {cartQuantity() > 0 && <span className="badge text-bg-light">{cartQuantity()}</span>}
        </div>
        );
};

export default CartWidget;