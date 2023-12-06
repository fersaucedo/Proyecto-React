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
        <div>
            {cart.map(p=> <CartItem key= {p.id}{...p}/>)}
            <h3>Total: ${total()}</h3>
            <button onClick={()=> clearCart()}>Vaciar carrito</button>
            <Link to='/checkout'>Checkout</Link>
        </div>
    )
}

export default Cart