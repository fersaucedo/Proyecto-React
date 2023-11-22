import { useEffect, useState } from "react"
import {getProductoById} from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null);

    useEffect(() => {
        getProductoById('1')
            .then (response => {
                setProducto(response)
            })
            .catch (error => {
                console.log(error)
            })
    },[])

  return (
    <div>
        <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer