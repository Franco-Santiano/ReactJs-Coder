import { useContext, useState } from "react";
import ItemCounter from "../ItemCounter/ItemCounter";
import { CartContext } from "../../context/CartContext";



export const ItemDetail =(producto) =>{
  const {nombre,precio,descripcion,stock, id, imagen} = producto
  const {addItem,itemQuantity} = useContext(CartContext)

    const onAdd =  (cantidad) =>{
      addItem(producto,cantidad)
    }


  return (
    <div className= "m-5 border-black d-flex justify-content-center">
    <img src={imagen} className="w-50 border border-black card-img-top img-thumbnail rounded" alt={id} />
    <div className="card-body bg-dark border text-white rounded p-5">
      <h5 className="card-title fs-1">{nombre}</h5>
      <hr className="w-100" />
      <span className="fs-3 p-3">Precio: ${precio}</span>
      <br />
        <span className="fs-4 p-3">Stock: {stock-itemQuantity(id)}</span>
      <p className="card-text m-3 fs-5 pb-5">{descripcion}</p>
      <div className="d-flex justify-content-center gap-2 p-3">
      <ItemCounter nombre={nombre} precio={precio} id={id} stock={stock-itemQuantity(id)} onAdd={onAdd}/>
      </div>
    </div>
  </div>
)}