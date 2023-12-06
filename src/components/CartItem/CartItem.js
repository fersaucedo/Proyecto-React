import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartItem = ({ id, name, img, price, cantidad }) => {

  const { removeItem } = useContext(CartContext)

  return (
    <div className="card mb-3 border-warning m-2" style={{ maxWidth: '540px' }}>
    <div className="row g-0">
        <div className="col-md-4">
            <img src={img} className="img-fluid rounded-start" alt={name} />
        </div>
        <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">${price}</p>
                <p className="card-text">Cantidad: {cantidad}</p>
                <button className="btn btn-warning" onClick={() => removeItem(id)}>Eliminar Producto</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default CartItem