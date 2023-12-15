import "./CartWidgets.css";
import carrito from "./assets/carrito.png";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom";

const CartWidgets = () => {
  const { cantidadTotal } = useContext(CartContext);

  return (
    <Link to='/cart' className="contenedor-cart" >
      <img src={carrito} alt="carrito" />
      {cantidadTotal}
    </Link>
  );
};

export default CartWidgets;
