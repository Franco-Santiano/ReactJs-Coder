import {Item} from '../Item/Item';



export const  ItemList =({productos}) =>{
    return(
        <div className="itemList container-fluid text-center row ">
            {productos.map(x => <Item key={x.id} {...x}/>)}
        </div>
    )
    }
