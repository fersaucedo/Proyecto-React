import { useState, useEffect } from "react";
import { getProductos } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState([])

  useEffect(() => {
    getProductos()
        .then(response => {
          setProductos(response)
        })
        .catch(error => {
          console.log(error)
        })
  }, [])


  return (
    <div className ="contenedor-bienvenida">
        <h1>{greeting}</h1>
        <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer