import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Store from "./Store";
import NaturalGroceries from "./NaturalGroceries";
import Testimonal from "./Testimonal";
import Sloggen from "./Sloggen";
import CartGif from "./CartGif";
import Aboutus from "./Aboutus";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import ContactForm from "./ContactForm";
function Index() {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="../Image/HerbsImage.png" className="d-block w-100" alt="Herbs Banner" style={{ height: "600px" }} />
          </div>
          <div className="carousel-item">
            <img src="../Image/GheeProduct.png" className="d-block w-100" alt="Ghee Product" style={{ height: "600px" }} />
          </div>
          <div className="carousel-item">
            <img src="../Image/faceIngredients.png" className="d-block w-100" alt="Face Ingredients" style={{ height: "600px" }} />
          </div>
          <div className="carousel-item">
            <img src="../Image/HoneyImage.png" className="d-block w-100" alt="Honey Image" style={{ height: "600px" }} />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      <div className="running-line">
        <div className="ticker">
          <p>
            🌱 Welcome to <strong>Chauhan Herbs</strong> — Your trusted source for 100% Natural & Ayurvedic Products |
            🌿 Fresh Herbs | ☕ Organic Tea | 🌸 Essential Oils | 💚 Wellness for Every Home!
          </p>
        </div>
      </div>
     <Store></Store>
     <NaturalGroceries></NaturalGroceries>
     <Testimonal></Testimonal>
     <Sloggen></Sloggen>
     <CartGif></CartGif>
     <Aboutus></Aboutus>
     <Card1></Card1>
     <Card2></Card2>
     <Card3></Card3>
     <Card4></Card4>
    <ContactForm></ContactForm>
    </div>
  );
}

export default Index;