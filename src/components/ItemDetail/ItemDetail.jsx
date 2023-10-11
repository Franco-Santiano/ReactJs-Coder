import ItemCounter from "../ItemCounter/ItemCounter";

export const ItemDetail =({nombre,precio,descripcion,stock, id, imagen}) =>{



  return (
    <div className="card p-2 mt-3 mb-5 m-auto w-25 h-25">
        <picture>
    <img src={imagen} className="card-img-top img-thumbnail" alt={id}/>
        </picture>
    <div className="card-body text-center">
      <h5 className="card-title fs-1">{nombre}</h5>
      <span className="fs-3">Precio: ${precio} Stock: {stock}</span>
      <p className="card-text fs-5">{descripcion}</p>
      <ItemCounter className="m-1 w-25" nombre={nombre} precio={precio} id={id} stock={stock}/>
    </div>
  </div>
)}