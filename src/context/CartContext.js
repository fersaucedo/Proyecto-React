import { createContext, useState } from 'react'

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addItem = (item, cantidad) => {

        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, cantidad }]);
            alert('El producto fue agregado correctamente al carrito')
        } else {
            alert('Este producto ya se encuentra en carrito');
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