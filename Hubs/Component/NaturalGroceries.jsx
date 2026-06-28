import React from "react";
import "../Style/NaturalGroceries.css";

const NaturalGroceries = () => {
  return (
    <div className="mt-5">
      <div className="heading p-2 mt-5">
        <h3 className="mt-5">Natural Groceries</h3>
        <h6>Choose from a wide range of ethically made natural products</h6>
      </div>

      <div className="groceries d-flex justify-content-center text-center align-items-center">
        <div className="natural-icons d-flex gap-5 justify-content-center align-items-center flex-wrap">
          <div>
            <a href="#" className="text-decoration-none text-black">
              <img src="../Image/Grain&Daliya.png" alt="" />
              <h6>Grain And Daliya</h6>
            </a>
          </div>

          <div>
            <a href="#" className="text-decoration-none text-black">
              <img src="../Image/flours.png" alt="" />
              <h6>Flour</h6>
            </a>
          </div>

          <div>
            <a href="#" className="text-decoration-none text-black">
              <img src="../Image/oil&Ghee.png" alt="" />
              <h6>Oil & Ghee</h6>
            </a>
          </div>

          <div>
            <a href="#" className="text-decoration-none text-black">
              <img src="../Image/pulses.png" alt="" />
              <h6>Pulses</h6>
            </a>
          </div>

          <div>
            <a href="#" className="text-decoration-none text-black">
              <img src="../Image/Jaggery.png" alt="" />
              <h6>Jaggery</h6>
            </a>
          </div>

          <div>
            <a href="#" className="text-decoration-none text-black">
              <img src="../Image/SugarandSalt.png" alt="" />
              <h6>Salt & Sugar</h6>
            </a>
          </div>

          <div>
            <a href="#" className="text-decoration-none text-black">
              <img src="../Image/Honey.png" alt="" />
              <h6>Honey, Jam & Gulkand</h6>
            </a>
          </div>

          <div>
            <a href="#" className="text-decoration-none text-black">
              <img src="../Image/superfood.png" alt="" />
              <h6>Super Food</h6>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NaturalGroceries;