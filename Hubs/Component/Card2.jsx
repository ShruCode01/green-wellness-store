import React from "react";
import "../Style/Card.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useCart } from "./CartContext.jsx";


const Card2 = () => {
  const { addToCart } = useCart();

  const products = [
    {
      id: 5,
      name: "MedhaVardhak",
      price: 890,
      image: "../Image/honey1.jpeg",
      rating: 3.5,
    },
    {
      id: 6,
      name: "Kumkumadi Skin Elixir",
      price: 1200,
      image: "../Image/honey2.jpeg",
      rating: 4.5,
    },
    {
      id: 7,
      name: "Prakriti Care",
      price: 1300,
      image: "../Image/honey3.jpeg",
      rating: 5.0,
    },
    {
      id: 8,
      name: "Brahmi Bliss",
      price: 3000,
      image: "../Image/honey4.jpeg",
      rating: 4.8,
    },
  ];

  return (
    <div className="maincls">
      <h2 className="main-heading mt-5">
        Pure Ayurvedic Capsules for Natural Healing
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

export default Card2;