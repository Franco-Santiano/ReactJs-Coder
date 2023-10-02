import item from "./item.css"
import ItemCounter from "../ItemCounter/ItemCounter"
import { Link } from "react-router-dom"

export const Item =({nombre, imagen, precio, stock,id}) =>{
    return(
    <div className="card m-3 p-2 pt-3 d-grid row" style={{width: "25rem", height: "40rem"}}>
        <img src={imagen} className="col card-img-top img-fluid mx-auto w-auto h-auto" alt={nombre}/>
    <div className="card-body col-12 position-relative">
        <h5 className="card-title text-uppercase fs-3">{nombre}</h5>
        <span className="col fs-3"> $ {precio}</span>
        <br />
        <span className="fs-5 d-block mb-3">{stock} Unidades Disponibles</span>
        <ItemCounter className="m-1" stock ={stock}/>
        <Link className="detail-button btn w-100 btn-dark position-absolute bottom-0 start-0 d-block" to={`/itemDetailContainer/${id}`}>Ver Mas</Link>
    </div>
    </div>
    )
}