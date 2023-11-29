import { useState, useEffect } from "react";
import { getProductos, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";


const ItemListContainer = ({ greeting }) => {

  const [productos, setProductos] = useState([])

  const { categoryId } = useParams()

  useEffect(() => {

    const asyncFunc = categoryId ? getProductsByCategory : getProductos;

    asyncFunc(categoryId)
      .then(response => {
        setProductos(response)
      })
      .catch(error => {
        console.log(error)
      })

  }, [categoryId])


  return (
    <div className="contenedor-bienvenida">
      <h1>{greeting}</h1>
      <div>
        <ItemList productos={productos} />
      </div>
    </div>
  )
}

export default ItemListContainer