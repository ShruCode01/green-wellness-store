import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/cartGif.css";

const CartGif = () => {
  const videoItems = [
    { id: 1, title: "Pure Honey", video: "../Image/Natural.gif" },
    { id: 2, title: "Natural Face Ingredients", video: "../Image/FaceIngredient.mp4" },
    { id: 3, title: "Natural Masale", video: "../Image/NaturalMasale.mp4" },
  ];

  return (
    <div className="container text-center my-5">
      <h3 className="heading3 mb-4 "> 🌿Why The Chauhan Herbs?</h3>

      <div className="row justify-content-center g-4">
        {videoItems.map((item) => (
          <div className="col-md-4 col-sm-6" key={item.id}>
            <div className="video-wrapper">
              {/* Handle both GIFs and videos */}
              {item.video.endsWith(".gif") ? (
                <img
                  src={item.video}
                  alt={item.title}
                  className="video-media "  
                />
              ) : (
             <video
                  src={item.video}
                  className="video-media"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              )}
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartGif;