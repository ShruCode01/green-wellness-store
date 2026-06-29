import React from "react";
import { useCart } from "./CartContext";
import "../Style/Cart.css";
import Cartupi from "./Cartupi";

const Cart = () => {
  const {
    cartItems,
    totalItems,
    totalPrice,
    removeFromCart,
    addToCart,
    removeOne,
  } = useCart();
 
  const [paymentMethod, setPaymentMethod] = React.useState(""); // initially empty
  const [showUPI, setShowUPI] = React.useState(false);

  React.useEffect(() => {
    setShowUPI(paymentMethod === "UPI");
  }, [paymentMethod]);

  const orderOnWhatsApp = () => {
    const phoneNumber = "8279830303";
    const message = `Hello! I want to order these products: 
${cartItems.map((i) => `- ${i.name} (x${i.quantity})`).join("\n")}
Total: ₹${totalPrice}`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };
  function gohome() {
    window.location.href = "/";
  }
  
  return (
    <div className="cart-container">
      <h2 className="cart-heading">🛒 Your Shopping Cart</h2>

      <div className="cart-grid">
        {/* ✅ Show Products section only when payment is not selected */}
        {!showUPI && paymentMethod !== "COD" && (
          <div className="cart-card">
            <h3>
              <i className="bi bi-bag-fill"></i> Products
            </h3>
            <ul className="list-group products-scroll-box">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-product-card">
                  <div className="cart-product-left">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-product-img"
                    />

                    <div>
                      <h5 className="prod-name">{item.name}</h5>
                      <p className="prod-price">Rs.{item.price}.00</p>

                      <div className="qty-box">
                        <button
                          className="qty-btn"
                          onClick={() => removeOne(item.id)}
                        >
                          -
                        </button>
                        <span className="qty-display">{item.quantity}</span>
                        <button
                          className="qty-btn"
                          onClick={() => addToCart(item)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="remove-pill-btn"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </ul>
          </div>
        )}

        {/* 🧍 Customer Details and Payment Options */}
        <div className="cart-card">
          <h3>
            <i className="bi bi-person-fill fs-4 iconicp"></i> Customer Details
          </h3>

          <div className="input-group">
            <input type="text" required />
            <label>
              <i className="bi bi-person-fill icon"></i> Your Name
            </label>
          </div>

          <div className="input-group">
            <input type="text" required />
            <label>
              <i className="bi bi-telephone-fill"></i> Phone Number
            </label>
          </div>

          <div className="input-group">
            <input type="email" required />
            <label>
              <i className="bi bi-envelope-fill icon"></i> Your Email
            </label>
          </div>

          <div className="input-group">
            <input type="text" required />
            <label>
              <i className="bi bi-geo-alt-fill"></i> Delivery Address
            </label>
          </div>

          <div className="input-group">
            <input type="text" required />
            <label>
              <i className="bi bi-geo-fill"></i> Pin Code
            </label>
          </div>

          <div className="dropdown">
            <button
              className="btn btn-success dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Select Payment Method
            </button>
            <ul className="dropdown-menu">
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => setPaymentMethod("COD")}
                >
                  Cash On Delivery
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => setPaymentMethod("UPI")}
                >
                  UPI
                </button>
              </li>
            </ul>
          </div>

          <div className="cart-card-footer">
            <img
              src="/deliver.jpeg"
              alt="Decorative footer"
              className="cart-footer-img"
            />
          </div>
        </div>

        {/* ✅ Order Summary / UPI Section */}
        {!showUPI ? (
          <div className="cart-card">
            <h3>
              <i className="bi bi-cash"></i> Order Summary
            </h3>
            <h5>Total Items: {totalItems}</h5>
            <h5>Total Price: ₹{totalPrice}</h5>
            <p style={{ color: "green" }}>
              <i className="bi bi-truck"></i> Free delivery within 2/3 hours
            </p>
            <button onClick={orderOnWhatsApp} className="cart-btn">
              <i className="bi bi-whatsapp"></i> Order on WhatsApp
            </button>
            <button
              onClick={gohome}
              className="cart-btn "
              style={{ backgroundColor: "black" }}
            >
              {" "}
              <i className="bi bi-arrow-left"></i> Back To Home
            </button>
          </div>
        ) : (
          <Cartupi />
        )}
      </div>
    </div>
  );
};

export default Cart;