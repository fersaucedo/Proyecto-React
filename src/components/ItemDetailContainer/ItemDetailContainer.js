import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

import { getDoc, doc } from 'firebase/firestore'
import { db } from "../../config/firebase"


const ItemDetailContainer = () => {

  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, 'productos', itemId)

    getDoc(docRef)
      .then(response => {
        const data = response.data()
        const productAdapted = { id: response.id, ...data }
        setProducto(productAdapted)
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      })

  }, [itemId])

  if (loading) {
    return (
      <div className="cargando">
        <img src="https://usagif.com/wp-content/uploads/loading-58.gif" alt="cargando" />
      </div>
    )
  } else {


    return (
      <div>
        <ItemDetail {...producto} />
      </div>
    )
  }
}

export default ItemDetailContainer