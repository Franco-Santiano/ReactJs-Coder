import { PiShoppingCartSimpleBold} from 'react-icons/pi';

const CartWidget = () =>{

    return(
        <div>
        <PiShoppingCartSimpleBold fill='white' fontSize="2rem"/>
        <span className="badge text-bg-light">1</span>
        </div>
        );
};

export default CartWidget;