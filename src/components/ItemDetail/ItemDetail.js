import "./ItemDetail.css"
import { useState, useContext } from 'react'
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({ id, name, img, category, description, price, stock}) => {

  const [cantidadAgregada, setCantidadAgregada]= useState (0)

  const { addItem } = useContext(CartContext)

  const handleOnAdd =(cantidad) => {
    setCantidadAgregada (cantidad);

    const item = {
      id, name, price, img
    }
    addItem(item,cantidad)
  }

  return (


    <div className="card mb-3 card-detail">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={img} className="img-fluid rounded-start" alt={name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{category}</h6>
            <h6 className="card-subtitle mb-2 text-body-secondary">${price}</h6>
            <h6 className="card-subtitle mb-2 text-body-secondary">Stock disponible: {stock}</h6>
            <p className="card-text">{description}</p>
            <div className="card-footer">
              {
                cantidadAgregada > 0 ? (
                  <div className="d-flex gap-5">
                    <Link to='/' className='btn btn-primary'> Seguir comprando</Link>
                    <Link to='/cart' className="btn btn-success">Terminar compra</Link>
                  </div>
                ) : (
                <ItemCount inicio={1} stock={stock} onAdd={handleOnAdd} />
                )
              }
              
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default ItemDetail