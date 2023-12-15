import "./NavBar.css";
import CartWidgets from "../CartWidgets/CartWidgets";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <h2>LibrosVibes</h2>
      </Link>
      <div className="contenedor-categorias-cart">
        <div className="categorias">
          <NavLink to={`/category/Terror`} className="btn btn-outline-primary">Terror</NavLink>
          <NavLink to={`/category/Fantasia`} className="btn btn-outline-primary">Fantasia</NavLink>
          <NavLink to={`/category/Romance`} className="btn btn-outline-primary">Romance</NavLink>
          <NavLink to={`/category/Novela`} className="btn btn-outline-primary">Novelas</NavLink>
        </div>
        <CartWidgets />
      </div>
    </nav>
  );
};

export default NavBar;
