import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

  const [producto, setProducto] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {

    getProductById(itemId)
      .then(response => {
        setProducto(response);
      })
      .catch(error => {
        console.error('Error al obtener el producto:', error);
      });

  }, [itemId])

  return (
    <div>
      <ItemDetail {...producto} />
    </div>
  )
}

export default ItemDetailContainer