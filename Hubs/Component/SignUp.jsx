import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="signup-container d-flex justify-content-center align-items-center vh-100 mt-5 ">
      <div className="card shadow-lg p-4 rounded-4 signup-card">
        {/* Brand Title */}
        <h3 className="text-center mb-4 fw-bold brand-title fs-1">Sign Up</h3>

        <form>
          <div className="mb-3">
            <label
              className="form-label fw-semibold  "
              style={{ marginRight: "300px" }}
            >
              Username
            </label>
            <input
              type="text"
              className="form-control rounded-3"
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="mb-3">
            <label
              className="form-label fw-semibold fs-5  "
              style={{ marginRight: "330px" }}
            >
              Email
            </label>
            <input
              type="email"
              className="form-control rounded-3"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <label
              className="form-label fw-semibold "
              style={{ marginRight: "300px" }}
            >
              Password
            </label>
            <input
              type="password"
              className="form-control rounded-3"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="mb-3">
            <label
              className="form-label fw-semibold   "
              style={{ marginRight: "230px" }}
            >
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control rounded-3"
              placeholder="Confirm your password"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-success w-100 rounded-3 fw-semibold mt-2 signup-btn"
          >
            Sign Up
          </button>

          <p className="text-center text-muted mt-3">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-success fw-semibold text-decoration-none"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;