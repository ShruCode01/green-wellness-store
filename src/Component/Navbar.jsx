import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg d-flex  bg-white shadow-sm fixed-top">
      <div className="container-fluid">

        {/* Logo */}
        <div className="d-flex align-items-center gap-2">
          <img src="/Image/HerbsLogo.PNG" height="60px" alt="Logo" />
          <span className="logo-text-green">Chauhan</span>
          <span className="logo-text-blue">Herbs</span>
        </div>

        {/* Mobile Toggle Button */}
        <button className="navbar-toggler" type="button"
          onClick={() => setMobileMenu(!mobileMenu)}>
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className={`collapse navbar-collapse ${mobileMenu ? "show" : ""}`}>
          <ul className="navbar-nav mx-auto gap-lg-4 text-center">

            <li className="nav-item">
              <a href="#home" className="nav-link">Home</a>
            </li>

            <li className="nav-item">
              <a href="#store" className="nav-link">Store</a>
            </li>

            <li className="nav-item">
              <a href="#natural-groceries" className="nav-link">Natural Groceries</a>
            </li>

            <li className="nav-item">
              <a href="#about" className="nav-link">About Us</a>
            </li>

            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>

          </ul>

          {/* Search Bar */}
          <div className="search-wrapper d-flex justify-content-center my-2">
            <input className="form-control me-1" type="text" placeholder="Search"/>
            <span className="search-btn bi bi-search"></span>
          </div>

          {/* User + Cart Icons */}
          <div className="d-flex align-items-center gap-3 justify-content-center my-2">

            {/* User dropdown */}
            <div className="position-relative">
              <i className="bi bi-person-circle fs-3 icon-hover"
                onClick={() => setOpenUserMenu(!openUserMenu)}></i>

              {openUserMenu && (
                <div className="dropdown-box bg-white shadow rounded p-2">
                  <Link to="/login" className="dropdown-item">Login</Link>
                  <Link to="/signup" className="dropdown-item">Sign Up</Link>
                </div>
              )}
            </div>

            {/* Cart */}
            <i className="bi bi-cart-fill fs-3 icon-hover"></i>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;