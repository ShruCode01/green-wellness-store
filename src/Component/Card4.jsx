import React from "react";
import "../Style/Card.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useCart } from "./CartContext";

const Card4 = () => {
  const { addToCart } = useCart();

  const products = [
    {
      id: 13,
      name: "Heritage + Purity Focus - 80gm",
      price: 890,
      image: "../Image/pack1.jpeg",
      rating: 4.5,
    },
    {
      id: 14,
      name: "Heritage + Purity Focus (Large Combo Pack)",
      price: 9999,
      image: "../Image/pack4.jpeg",
      rating: 4.3,
    },
    {
      id: 15,
      name: "Heritage + Purity Focus Aloe (Combo Pack)",
      price: 4900,
      image: "../Image/pack2.jpeg",
      rating: 3.8,
    },
    {
      id: 16,
      name: "Purely Ayurvedic - More Products",
      price: 1599,
      image: "../Image/pack3.jpeg",
      rating: 5.0,
    },
  ];

  return (
    <div className="maincls">
      <h2 className="main-heading mt-5">
        Premium Collection Of Ayurvedic Churnas
      </h2>

      <div className="card-container">
        {products.map((p) => (
          <div className="product-card" key={p.id}>
            <img
              src={p.image}
              alt={p.name}
              className="product-image"
              style={{ height: "340px", width: "290px" }}
            />
            <h3 className="product-title">{p.name}</h3>
            <p className="product-price">Rs. {p.price}</p>

            <div className="product-rating">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-half"></i>
              <i className="bi bi-star"></i>
              <span>({p.rating})</span>
            </div>

            <button className="add-btn" onClick={() => addToCart(p)}>
              <i className="bi bi-cart4"></i>
              <span>Add to Cart</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card4;