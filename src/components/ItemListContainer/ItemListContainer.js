import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

import { useParams } from "react-router-dom";

import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from "../../config/firebase"


const ItemListContainer = ({ greeting }) => {

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true);

    const collectionRef = categoryId ? query(collection(db, 'productos'), where('category', '==', categoryId)) : collection(db, 'productos')

    getDocs(collectionRef)
      .then(response => {
        const productsAdapted = response.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data }
        })
        setProductos(productsAdapted);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      })

  }, [categoryId])

  if (loading) {
    return (
      <div className="cargando">
        <h1>Cargando catalogo de libros</h1>
        <img src="https://usagif.com/wp-content/uploads/loading-58.gif" alt="cargando" />
      </div>
    )
  } else {

    return (
      <div className="contenedor-bienvenida">
        <h1>{greeting}</h1>
        <div>
          <ItemList productos={productos} />
        </div>
      </div>
    )
  }
}

export default ItemListContainer