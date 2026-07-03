import React from 'react'
import "../Style/Cartupi.css"
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";

const Cartupi = () => {
  const {  totalPrice } = useCart();

  function orderOnWhatsApp(){
    const phoneNumber = "8279830303"; 
   const message = `
Hello Chauhan Herbs 🌿

I want to order:

${cartItems
  .map(
    (item) =>
      `${item.name}
Quantity : ${item.quantity}
Price : ₹${item.price * item.quantity}`
  )
  .join("\n\n")}

------------------------
Total = ₹${totalPrice}
`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  }

  const navigate = useNavigate();



  function gohome() {


const gohome = () => {
    navigate("/");
  };
};
  

  return (
      <div className="cart-Container">
    <div className="cart-card">
      <h3 className="card-title"> <i className="bi bi-cash"></i> Order Summary</h3>

      <div className="price-row">
        <h3 className="price">₹{totalPrice.toLocaleString("en-IN")}</h3>
        <p className="delivery"><i className="bi bi-truck"></i> Free delivery within 2/3 hours</p>
      </div>

      <div className="qr-section">
        <img src={`${import.meta.env.BASE_URL}image.png`} alt="Payment QR Code" className="qr-image" />
        <p className="scan-text">Scan this QR code to pay easily</p>
      </div>

      <div className="button-group">
        <button onClick={orderOnWhatsApp} className="cart-btn whatsapp">
          <i className="bi bi-whatsapp"></i> Please order on WhatsApp
        </button>

        <button onClick={gohome} className="cart-btn home" style={{backgroundColor:"black"}}>
          <i className="bi bi-arrow-left"></i> Back To Home
        </button>
      </div>
    </div>
    </div>
  )
}

export default Cartupi;