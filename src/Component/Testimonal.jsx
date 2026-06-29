import React, { useRef } from "react";
import "../Style/Testimontial.css";

const Testimonial = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const testimonials = [
    { id: 1, name: "Shruti", text: "Best herbal experience ever!", img: "../Image/Dp.png" },
    { id: 2, name: "Sneha", text: "Loved the natural quality!", img: "../Image/Dp.png" },
    { id: 3, name: "Simran", text: "Feels authentic and pure!", img: "../Image/Dp.png" },
    { id: 4, name: "Neha", text: "Amazing range of products!", img: "../Image/Dp.png" },
    { id: 5, name: "Raj", text: "Fast delivery and genuine herbs!", img: "../Image/Dp.png" },
    { id: 6, name: "Priya", text: "My skin feels refreshed!", img: "../Image/Dp.png" },
    { id: 7, name: "Arjun", text: "Love the Ayurvedic touch!", img: "../Image/Dp.png" },
    { id: 8, name: "Divya", text: "Very trustworthy brand!", img: "../Image/Dp.png" },
  ];

  return (
    <div className="testimonial-section text-center " >
      <h1 className="test-heading mt-5">🌿 TESTIMONIALS</h1>
      <hr className="mx-auto" style={{ width: "100px", border: "2px solid green" }} />

      <div className="testimonial-container position-relative mt-5">
        <button className="scroll-btn left" onClick={() => scroll("left")}>
          &#8592;
        </button>

        <div className="testimonial-scroll" ref={scrollRef}>
          {testimonials.map((item) => (
            <div className="card testimonial-card mt-5" key={item.id}>
              <img
                src={item.img}
                alt={item.name}
                className="card-img-top"
                style={{
                  borderRadius: "50%",
                  height: "70px",
                  width: "70px",
                  margin: "auto",
                  backgroundColor: "lightgreen",
                }}
              />
              <div className="card-body">
                <p className="card-text text-secondary mt-5">{item.text}</p>
                <h5 className="card-title text-success mt-2 fw-bold">~{item.name}</h5>
              </div>
            </div>
          ))}
        </div>

        <button className="scroll-btn right" onClick={() => scroll("right")}>
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Testimonial;