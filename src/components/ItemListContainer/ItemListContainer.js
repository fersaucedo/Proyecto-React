import "./ItemListContainer.css";

const ItemListContainer = ({greeting}) => {

  return (
    <div className ="contenedor-bienvenida">
        <h1>{greeting}</h1>
    </div>
  )
}

export default ItemListContainer