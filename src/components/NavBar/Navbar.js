import "./navbar.css";
import { Link } from "react-router-dom";
import CartWidget from "../cartWidget/CartWidget";
import Logo from "../Logo/Logo";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/">
          <Logo />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link to="/" className="nav-item nav-link active">
              Home
            </Link>
            <Link to="/electronics" className="nav-item nav-link active">
              Electronics
            </Link>
            <Link to="/mens" className="nav-item nav-link active">
              Men's
            </Link>
            <Link to="/cart" className="nav-item">
              <CartWidget />
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
