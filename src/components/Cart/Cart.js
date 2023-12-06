import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, cantidadTotal, total } = useContext(CartContext)

    if (cantidadTotal === 0) {
        return (
            <div className='contenedor-carrito-vacio'>
                <h1>Carrito vacio 😞</h1>
                <Link to='/' className='link-carrito-vacio btn btn-primary'> Volver al catalogo de libros</Link>
            </div>
        )
    }


    return (
        <div className='contenedor-carrito-grid'>
            <div>
                {cart.map(p => <CartItem key={p.id}{...p} />)}
            </div>
            <div className='contenedor-resumen-carrito border border-dark-subtle'>
                <h3>Resumen de compra</h3>
                <h5>Cantidad de productos: {cantidadTotal}</h5>
                <h5>Total: ${total()}</h5>

                <div  className='contenedor-botones-carrito'>
                    <button onClick={() => clearCart()} className='btn btn-primary'>Vaciar carrito</button>
                    <Link to='/checkout' className='btn btn-success'>Checkout</Link>
                </div>
            </div>
        </div>
    )
}

export default Cart