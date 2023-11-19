import "./ItemCount.css"
import { useState } from "react"


const ItemCount = ({stock, inicio, onAdd}) => {

    const[cantidad, setCantidad] = useState(inicio)

    const sumar = () => {
        if (cantidad < stock) {

            setCantidad(cantidad + 1)
        }
    }


    const restar = () => {
        if (cantidad > 1){

            setCantidad (cantidad - 1)
        }
    }



    return (
        <div>
            <div>
                <button onClick={restar}>-</button>
                <h4>{cantidad}</h4>
                <button onClick={sumar}>+</button>
            </div>

            <div>
                <button onClick={()=> onAdd(cantidad)} disabled ={!stock}>Agregar al carrito</button>
            </div>

        </div>
    )


}

export default ItemCount