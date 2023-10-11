import  {createContext, useState} from 'react';

export const CartContext = createContext({
    carrito: []
})


export const CartProvider = ({children}) =>{

    const [carrito, setCarrito]=useState([])

    console.log(carrito);

const agregarProd = (producto, cantidad) =>{
    setCarrito(previo =>{
        const prodExistenteIndex = previo.findIndex(p => p.id === producto.id);

        

        if(prodExistenteIndex !== -1){
            const carritoActualizado = [...previo]
            carritoActualizado[prodExistenteIndex].cantidad = cantidad;
            return carritoActualizado;
        }else{
            return [...previo, {...producto, cantidad}]
        };

    })

}

const eliminarProd = (prodId)=>{
    const carritoActualizado = carrito.filter(p => p.Id !== prodId )
    setCarrito(carritoActualizado);
}

const limpiarCarrito = ()=>{
    setCarrito([]);
}


    return(

<CartContext.Provider value={{carrito, agregarProd, eliminarProd, limpiarCarrito}}>

        {children}

</CartContext.Provider>

)
}