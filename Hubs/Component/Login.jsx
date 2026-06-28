import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../Style/Login.css'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4 rounded-4" style={{ width: "400px" }}>
        
        <h3 className="text-center mb-4 fw-bold text-success fs-1">Login </h3> 
        <form>
          <div className="mb-3">
            <label className="form-label fw-semibold ">Email </label>
            <input
              type="email"
              className="form-control rounded-3"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label password fw-semibold">Password</label>
            <input
              type="password"
              className="form-control rounded-3"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe" className="ms-2 text-muted">
                Remember me
              </label>
            </div>
            <a href="#" className="text-success text-decoration-none">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="btn btn-success w-100 rounded-3 fw-semibold">
            Login
          </button>

          <p className="text-center text-muted mt-3">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-success fw-semibold text-decoration-none"
            >
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;