

const ItemListContainer = ({className, id, gretting}) =>{

    return(
        <section className={className} id={id}>
        <h1>{gretting}</h1>
        </section>
    );
};

export default ItemListContainer;