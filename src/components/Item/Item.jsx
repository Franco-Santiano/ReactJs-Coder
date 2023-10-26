import "./item.css"
import { Link } from "react-router-dom"

export const Item =({nombre, imagen, precio, stock,id}) =>{
    return(
    <div className="card card-background m-5 d-flex flex-column justify-content-around align-items-center mb-3" style={{width: "20rem", height: "32rem"}}>
        <img src={imagen} className="object-fit-fill rounded-top mb-4"  alt={nombre} style={{width: "20rem", height: "18rem"}}/>
    <div className="p-3 d-flex flex-column text-white">
        <h5 className=" text-uppercase fs-3">{nombre}</h5>
        <span className="fs-3"> $ {precio}</span>
        <span className="fs-5 mb-2">{stock} Unidades Disponibles</span>
        <Link className="btn btn-light mb-2" to={`/itemDetailContainer/${id}`}>Ver Mas</Link>
    </div>
    </div>
    )
}