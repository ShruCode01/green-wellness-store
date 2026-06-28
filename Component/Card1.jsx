import React from "react";
import { useCart } from "./CartContext.jsx";

const Card1 = () => {
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "Desi Cow Ghee - 1 Litre",
      price: 1000,
      image: "/gee1.jpeg",
    },
    {
      id: 2,
      name: "Ahinsak Ghee - 1 Litre",
      price: 1200,
      image: "/gee2.jpeg",
    },
    {
      id: 3,
      name: "Vedic Bil Ghee - 1 Litre",
      price: 1300,
      image: "/gee3.jpeg",
    },
    {
      id: 4,
      name: "Pure Ghee - 1 Litre",
      price: 3000,
      image: "/gee4.jpeg",
    },
  ];

  return (
    <div className="maincls">
      <h2 className="main-heading mt-5">
        Premium Collection Of Pure & Sacred Ghee
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
              <span>(4.5)</span>
            </div>

            <button className="add-btn " onClick={() => addToCart(p)}>
              <i className="bi bi-cart4"></i>
              <span>Add to Cart</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card1;