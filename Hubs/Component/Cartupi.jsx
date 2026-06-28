import React from 'react'
import "../Style/Cartupi.css"

const Cartupi = () => {
  function orderOnWhatsApp(){
    const phoneNumber = "8279830303"; 
    const message = "Hello! I want to order some Ayurvedic products.";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  }

  function gohome() {
    window.location.href = "/";
  }

  return (
      <div className="cart-Container">
    <div className="cart-card">
      <h3 className="card-title"> <i className="bi bi-cash"></i> Order Summary</h3>

      <div className="price-row">
        <h3 className="price">₹45,532</h3>
        <p className="delivery"><i className="bi bi-truck"></i> Free delivery within 2/3 hours</p>
      </div>

      <div className="qr-section">
        <img src="../Image/image.png" alt="Payment QR Code" className="qr-image" />
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