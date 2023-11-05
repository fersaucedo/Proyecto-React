import "./NavBar.css";
import CartWidgets from "../CartWidgets/CartWidgets";

const NavBar = () => {
  return (
    <nav>
      <h2>LibrosVibes</h2>
      <div className= "contenedor-categorias-cart">
        <div className ="categorias">
          <button>Thriller</button>
          <button>Fantasia</button>
          <button>Romance</button>
          <button>Novelas</button>
        </div>
        <CartWidgets />
      </div>
    </nav>
  );
};

export default NavBar;
