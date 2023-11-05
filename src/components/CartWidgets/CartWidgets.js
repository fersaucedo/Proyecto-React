import "./CartWidgets.css";
import carrito from "./assets/carrito.png";

const CartWidgets = () => {
  return (
    <div className="contenedor-cart">
      <img src={carrito} alt="carrito" />
      0
    </div>
  );
};

export default CartWidgets;
