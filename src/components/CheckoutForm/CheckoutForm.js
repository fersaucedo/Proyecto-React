import './CheckoutForm.css'
import { useState } from 'react';


const CheckoutForm = ({ onConfirm }) => {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleConfirm = (e) => {
    e.preventDefault()

    const userData = {
      name, phone, email
    }

    onConfirm(userData)
  }

  return (
    <div className='checkoutform'>
      <form onSubmit={handleConfirm}>
        <label> Nombre </label>
        <input type="text" placeholder='Ingresa tu nombre' value={name} onChange={({ target }) => setName(target.value)} />
        <label> Correo Electrónico </label>
        <input type="email" placeholder='Ingresa tu correo electrónico' value={email} onChange={({ target }) => setEmail(target.value)} />
        <label> Teléfono </label>
        <input type="number" placeholder='Ingresa un teléfono de contacto' value={phone} onChange={({ target }) => setPhone(target.value)} />
        <button type='submit' className='btn btn-success mt-4'>Crear Orden</button>
      </form>
    </div>
  )
}

export default CheckoutForm