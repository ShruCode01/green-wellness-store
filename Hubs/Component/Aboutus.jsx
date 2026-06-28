import React from 'react'
import "../Style/Aboutus.css";
const Aboutus = () => {
  return (
    <div>
      
      <div className="about  text-center p-3 " >
        <h3>🌿About The Chauhan Herbs</h3>
      </div>
        <div className="about-content  mt-4 text-secondary  d-flex flex-column ">
          <p >
            At <strong>Chauhan Herbs</strong>, we believe that true wellness
            begins with nature. Our mission is to bring you the purest herbal
            and Ayurvedic products—crafted with care, inspired by ancient
            wisdom, and perfected through modern science.
          </p>
          <p>
            Founded with a passion for holistic living,
            <strong>Chauhan Herbs</strong> offers a hand-picked range of herbal
            supplements, natural groceries, essential oils, and organic
            teas—everything your body and mind need to stay balanced and
            rejuvenated.
          </p>
          <p>
            We work closely with trusted farmers and herbal experts to ensure
            every product is 100% natural, chemical-free, and ethically sourced.
            From farm to your home, every step reflects our promise of purity
            and wellness.
          </p>
        </div>
        <div className="logo-container">
      <h1>OUR PROMISE TO YOU</h1>

      <div className="logoFile">
        <div className="logo-item">
          <img src="../Image/Non-Gmo.png" alt="Non-GMO" />
          <h5>NON-GMO <br />Product</h5>
        </div>

        <div className="logo-item">
          <img src="../Image/Click.png" alt="Ethical & Natural" />
          <h5>Ethical & Natural</h5>
        </div>
        <div className="logo-item">
          <img src="../Image/Heart.png" alt="Quality Guaranteed" />
          <h5>Quality you’ll <br />Love Guaranteed</h5>
        </div>

        <div className="logo-item">
          <img src="../Image/Non-Gmo.png" alt="Minimum Order" />
          <h5>Minimum Order <br />Value ₹255</h5>
        </div>

        <div className="logo-item">
          <img src="../Image/Like.png" alt="Best Services" />
          <h5>Best Services</h5>
        </div>
      </div>
    </div>
      </div>
  )
}

export default Aboutus