import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import {useForm} from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Services/Firebase/config";


export const Checkout = () => {
    const {clear, cart, total} = useContext(CartContext)
    const {register, handleSubmit} = useForm();
    const [ticketId, setTicketId] = useState("");
    
    const sendOrder = (data)=>{
      const dateNow = new Date()
        const ticket = {
          client: data,
          products: cart,
          total: total(),
          date: `${dateNow.getFullYear()}/${dateNow.getMonth() + 1}/${dateNow.getDate()} ${dateNow.getHours()}:${dateNow.getMinutes()}:${dateNow.getSeconds()}`
        }
    
      const orderRef = collection(db, "ordenes");
        addDoc(orderRef, ticket)
          .then((doc)=>{
            setTicketId(doc.id);
            clear();
          })
    }

    if(ticketId){
      return <h1 className="main-title text-white">Su orden fue realizada con exito, los datos de la misma son: {ticketId}</h1>
    }


  return (
    <div className="d-flex justify-content-center">
    <form onSubmit={handleSubmit(sendOrder)} className="d-flex flex-column border border-3 align-items-center gap-5 p-3 bg-dark m-5">
  <div className=" d-flex mt-5 gap-3">
    <div className="form-floating">
      <input type="text" className="form-control border border-3 border-dark-subtle" placeholder="Name" {...register("Name")} required />
      <label htmlFor="floatingInput">Name</label>
    </div>
      <div className="form-floating">
      <input type="text" className="form-control border border-3 border-dark-subtle" placeholder="Surname" {...register("Surname")}  required/>
      <label htmlFor="floatingInput">Surname</label>
    </div>
  </div>
      <div className="form-floating w-100">
        <input type="email" className="form-control border border-3 border-dark-subtle" placeholder="Email@example.com" {...register("Email")} required/>
        <label htmlFor="floatingInput">Email Address</label>
      </div>
      <div className="form-floating w-100">
        <input type="email" className="form-control border border-3 border-dark-subtle" placeholder="Email@example.com" {...register("Email Confirm")}  required/>
        <label htmlFor="floatingInput">Repeat Email Address</label>
      </div>
      <div className="form-floating w-100">
        <input type="number" className="form-control border border-3 border-dark-subtle" placeholder="+54123124242" {...register("Phone Number")} required />
        <label htmlFor="floatingInput w-100">Phone Number</label>
      </div>

      <button className="btn btn-success w-100">Generate order</button>
    
    
    </form>
    </div>
  )
}
