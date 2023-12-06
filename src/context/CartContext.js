import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    console.log(cart)

    const addItem = (item, cantidad) => {

        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, cantidad }]);
        } else {
            console.error('El producto ya esta en carrito');
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => setCart([])

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const cantidadTotal = cart.length;

    const total = () => {
        return cart.reduce((acc, x) => acc += x.price * x.cantidad, 0)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, cantidadTotal, total }}>
            {children}
        </CartContext.Provider>
    )
}