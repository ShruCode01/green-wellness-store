import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";

import Index from "../Component/Index";
import Store from "../Component/Store";
import Card1 from "../Component/Card1";
import Card2 from "../Component/Card2";
import Card3 from "../Component/Card3";
import Card4 from "../Component/Card4";
import NaturalGroceries from "../Component/NaturalGroceries";
import Aboutus from "../Component/Aboutus";
import ContactForm from "../Component/ContactForm";
import Footer from "../Component/Footer";
import Login from "../Component/Login";
import SignUp from "../Component/SignUp";
import Cart from "../Component/Cart";
import { useCart } from "../Component/CartContext";


import "../Style/Index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const products = [
  "Ashwagandha",
  "Shilajit",
  "Amla Powder",
  "Aloe Vera Juice",
  "Tulsi Drops",
  "Neem Capsules",
];

// ✅ Search Page Component
const SearchResults = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("query")?.toLowerCase();

  const filtered = products.filter((p) => p.toLowerCase().includes(query));

  return (
    <div className="container mt-5">
      <h2>
        Search results for: <span className="text-success">{query}</span>
      </h2>
      {filtered.length > 0 ? (
        <ul className="mt-3">
          {filtered.map((item) => (
            <li key={item} className="fs-5">
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-3 text-danger fs-5">No results found.</p>
      )}
    </div>
  );
};

const App = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { totalItems } = useCart(); // ⬅️ Get items count from context

  const navigate = useNavigate();

  const suggestions = products.filter(
    (item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase()) &&
      searchQuery.length > 0
  );

  const handleSearch = () => {
    const s = searchQuery.trim();
    if (!s) return;

    navigate(`/search?query=${s}`);
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (item) => {
    setSearchQuery(item);
    navigate(`/search?query=${item}`);
    setShowSuggestions(false);
  };

  useEffect(() => {
    const closeMenus = () => {
      setOpenMobileMenu(false);
      setOpenUserMenu(false);
      setShowSuggestions(false);
    };
    window.addEventListener("click", closeMenus);
    return () => window.removeEventListener("click", closeMenus);
  }, []);

  return (
    <>
      <nav
  className="navbar shadow-sm bg-white px-3 d-flex align-items-center justify-content-between"
  onClick={(e) => e.stopPropagation()}
>
  {/* Logo */}
  <div className="d-flex align-items-center gap-2">
    <img src="Hubs\Image\HerbsLogo.PNG" height="60" alt="logo" />
    <div>
      <span className="text-success fw-bold d-block">Chauhan</span>
      <span className="text-primary fw-bold d-block">Herbs</span>
    </div>
  </div>

  {/* Desktop Links */}
  <div className="alink d-none d-lg-flex gap-4">
    <Link to="/" className="nav-link-custom">
      Home
    </Link>
    <Link to="/store" className="nav-link-custom">
      Store
    </Link>
    <Link to="/natural-groceries" className="nav-link-custom">
      Natural Groceries
    </Link>
    <Link to="/about" className="nav-link-custom">
      About
    </Link>
    <Link to="/contact" className="nav-link-custom">
      Contact
    </Link>
  </div>

  {/* Right Side Icons */}
  <div className="d-flex align-items-center gap-3">
    {/* Desktop Search */}
    <div className="position-relative d-none d-lg-flex">
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onClick={(e) => {
          e.stopPropagation();
          setShowSuggestions(true);
        }}
        style={{ maxWidth: 300 }}
      />
      <span
        className="input-group-text bi bi-search text-white me-2"
        onClick={handleSearch}
        style={{ cursor: "pointer" }}
      ></span>

      {showSuggestions && suggestions.length > 0 && (
        <div
          className="suggest-list shadow p-2 bg-white position-absolute w-100"
          style={{ top: "100%", zIndex: 999 }}
        >
          {suggestions.map((item) => (
            <div
              key={item}
              className="p-2 suggestion-item"
              onClick={() => handleSuggestionClick(item)}
              style={{ cursor: "pointer" }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>

    {/* Mobile Search icon */}
    <i
      className="bi bi-search fs-4 d-lg-none"
      onClick={() => setOpenMobileMenu(true)}
      role="button"
    ></i>

    {/* User icon */}
    <div className="position-relative">
      <i
        className="bi bi-person-fill iconicp fs-4"
        onClick={(e) => {
          e.stopPropagation();
          setOpenUserMenu((p) => !p);
        }}
        role="button"
      ></i>

      {openUserMenu && (
        <div className="user-dropdown show">
          <Link to="/login" className="dropdown-item">
            Login
          </Link>
          <Link to="/signup" className="dropdown-item">
            Signup
          </Link>
        </div>
      )}
    </div>

    {/* Cart */}
   <i
  className="bi bi-cart3 iconicp fs-4 position-relative"
  onClick={() => navigate("/cart")}
  style={{ cursor: "pointer", position: "relative" }}
>
  <span className="cart-badge">{totalItems}</span> 
</i>


    {/* Hamburger for mobile */}
    <i
      className="bi bi-list fs-2 d-lg-none"
      onClick={(e) => {
        e.stopPropagation();
        setOpenMobileMenu(!openMobileMenu);
      }}
    ></i>
  </div>

  {/* Mobile Slide Menu */}
  <div
    className={`mobile-side-menu ${openMobileMenu ? "open" : ""}`}
    onClick={(e) => e.stopPropagation()}
  >
    <input
      type="text"
      className="form-control mb-2"
      placeholder="Search..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    <button className="btn btn-success w-100 mb-3" onClick={handleSearch}>
      Search
    </button>

    <Link className="mobile-link" to="/" onClick={() => setOpenMobileMenu(false)}>
      Home
    </Link>
    <Link className="mobile-link" to="/store" onClick={() => setOpenMobileMenu(false)}>
      Store
    </Link>
    <Link
      className="mobile-link"
      to="/natural-groceries"
      onClick={() => setOpenMobileMenu(false)}
    >
      Natural Groceries
    </Link>
    <Link className="mobile-link" to="/about" onClick={() => setOpenMobileMenu(false)}>
      About
    </Link>
    <Link className="mobile-link" to="/contact" onClick={() => setOpenMobileMenu(false)}>
      Contact
    </Link>
  </div>
</nav>


      {/* Routes */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/store" element={<Store />} />
        <Route path="/card1" element={<Card1 />} />
        <Route path="/card2" element={<Card2 />} />
        <Route path="/card3" element={<Card3 />} />
        <Route path="/card4" element={<Card4 />} />
        <Route path="/natural-groceries" element={<NaturalGroceries />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;











