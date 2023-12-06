import './CartItem.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartItem = ({ id, name, img, price, cantidad }) => {

    const { removeItem } = useContext(CartContext)

    return (
        <div className="card mb-3 border border-success p-2 border-opacity-50 m-2 cart-item">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={img} className="img-fluid rounded" alt={name} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">${price}</p>
                        <p className="card-text">Cantidad: {cantidad}</p>
                        <button className="btn btn-danger" onClick={() => removeItem(id)}>
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M9 3h6v-1.75c0-.066-.026-.13-.073-.177-.047-.047-.111-.073-.177-.073h-5.5c-.066 0-.13.026-.177.073-.047.047-.073.111-.073.177v1.75zm11 1h-16v18c0 .552.448 1 1 1h14c.552 0 1-.448 1-1v-18zm-10 3.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v12c0 .276.224.5.5.5s.5-.224.5-.5v-12zm5 0c0-.276-.224-.5-.5-.5s-.5.224-.5.5v12c0 .276.224.5.5.5s.5-.224.5-.5v-12zm8-4.5v1h-2v18c0 1.105-.895 2-2 2h-14c-1.105 0-2-.895-2-2v-18h-2v-1h7v-2c0-.552.448-1 1-1h6c.552 0 1 .448 1 1v2h7z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem