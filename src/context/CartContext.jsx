import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({children}) =>{

    const [cart, setCart] = useState([]);

    const addItem = (item,quantity) =>{
        if(isInCart(item.id)){
            setCart(cart.map((producto)=>{
                if(producto.id === item.id){
                    return {...producto, cantidad: producto.cantidad + quantity}
                }else{
                    return producto;
                }
            }))
        }else{
            setCart([...cart,{...item, cantidad: quantity}])
        }
    }

    const clear = () =>{
        setCart([]);
    }

    const isInCart = (id) =>{
        return cart.some((item)=> item.id === id)
    }

    const removeItem = (id) =>{
        setCart(cart.filter((item) => item.id !== id))
    }

    const cartQuantity = () =>{
        return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }

    const total = () => {
    return cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0)
}
const itemQuantity = (id)=>{
    const itemInCart = cart.find((item)=> item.id === id);
    if(itemInCart){
      return itemInCart.cantidad;
    }else{
      return 0;
    }
  }

    return(
        <CartContext.Provider value={{cart, addItem, clear, removeItem, cartQuantity, total,itemQuantity }}>
            {children}
        </CartContext.Provider>
    )
}