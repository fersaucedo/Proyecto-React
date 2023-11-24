import "./NavBar.css";
import CartWidgets from "../CartWidgets/CartWidgets";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <h2>LibrosVibes</h2>
      </Link>
      <div className= "contenedor-categorias-cart">
        <div className ="categorias">
          <NavLink to={`/category/terror`} className="btn btn-outline-primary">Terror</NavLink>
          <NavLink to={`/category/fantasia`} className="btn btn-outline-primary">Fantasia</NavLink>
          <NavLink to={`/category/romance`} className="btn btn-outline-primary">Romance</NavLink>
          <NavLink to={`/category/novela`} className="btn btn-outline-primary">Novelas</NavLink>
        </div>
        <CartWidgets />
      </div>
    </nav>
  );
};

export default NavBar;
