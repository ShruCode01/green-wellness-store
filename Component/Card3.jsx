import React from "react";
import "../Style/Card.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useCart } from "./CartContext.jsx";

const Card3 = () => {
  const { addToCart } = useCart();

  const products = [
    {
      id: 9,
      name: "Neem & Tulsi Clarifying Face Oil - 80ml",
      price: 1399,
      image: "../Image/face1.jpeg",
      rating: 3.5,
    },
    {
      id: 10,
      name: "Neem & Tulsi Clarifying Face Oil - 120ml",
      price: 1800,
      image: "../Image/face2.jpeg",
      rating: 4.8,
    },
    {
      id: 11,
      name: "Neem & Aloe Radiance Face Oil Combo Pack",
      price: 3000,
      image: "../Image/face3.jpeg",
      rating: 4.0,
    },
    {
      id: 12,
      name: "Tulsi & Jojoba Glow Essence",
      price: 2599,
      image: "../Image/face4.jpeg",
      rating: 4.8,
    },
  ];

  return (
    <div className="maincls">
      <h2 className="main-heading mt-5">
        Pure Ayurvedic Face Care for a Natural Glow
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

export default Card3;