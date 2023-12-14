import './Checkout.css'
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { db } from '../../config/firebase'
import { writeBatch, addDoc, collection, query, where, getDocs, Timestamp, documentId } from 'firebase/firestore';
import CheckoutForm from '../CheckoutForm/CheckoutForm'

const Checkout = () => {
  const [loading, setLoading] = useState();
  const [orderId, setOrderId] = useState('');

  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const objOrder = {
        buyer: {
          name, phone, email
        },
        items: cart,
        total: Number(total),
        date: Timestamp.fromDate(new Date())
      }

      const batch = writeBatch(db)

      const outOfStock = []

      const ids = cart.map(prod => prod.id)

      const productsRef = collection(db, 'productos')

      //continuar aca
      const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

      const { docs } = productsAddedFromFirestore

      docs.forEach(doc => {
        const dataDoc = doc.data()
        const stockDb = dataDoc.stock

        const productAddedToCart = cart.find(prod => prod.id === doc.id)
        const prodQuantity = productAddedToCart?.cantidad

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity })
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc })
        }
      })

      if (outOfStock.length === 0) {
        await batch.commit()

        const orderRef = collection(db, 'orders');

        const orderAdded = await addDoc(orderRef, objOrder);

        setOrderId(orderAdded.id)

        clearCart()

      } else {
        console.error('hay productos que se encuentran fuera de stock')
      }


    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className='cargando'>
        <h1>Un momento por favor, estamos generando su orden⌛</h1>
        <img src="https://usagif.com/wp-content/uploads/loading-58.gif" alt="cargando" />
      </div>
    )
  }

  if (orderId) {
    return (
    <h1>El código de gestion es: {orderId}</h1>
    
    );
  }


  return (
    <div className='checkout'>
      <h1>Checkout</h1>
      <div>
        <CheckoutForm onConfirm={createOrder} />
      </div>
    </div>
  )
}

export default Checkout