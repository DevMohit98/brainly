import React from "react";
import "../App.css";
import logo from "../Assests/logo.svg";
import google from "../Assests/google.png";
import aaple from "../Assests/aaple.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <section className="second-nav">
        <nav class="navbar navbar-expand-lg navbar-light bg-light p-4">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              <img src={logo} alt="" width="100" height="24"></img>
            </a>
            <form class="d-flex nav-search">
              <input
                class="form-control  me-2"
                type="search"
                placeholder="Search for an answer to any question..."
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/question"
                  >
                    Ask question
                  </Link>
                </li>
              </ul>
              <button class="btn btn-outline-success">join for free</button>
            </div>
          </div>
        </nav>
      </section>
      <section>
        <div className="d-flex justify-content-center align-items-center flex-column mt-4">
          <h1 className="text-center join-title mt-3">Welcome back</h1>
          <p className="join-para text-center mt-3">
            Get answers within minutes and finish your homework faster
          </p>
          <div className="social-links mt-3">
            <button className="links-btn">
              <img
                src={google}
                alt="google"
                width="20px"
                height="20px"
                className="mr-3"
              ></img>
              sign up with google
            </button>
          </div>
          <div className="social-links mt-3">
            <button className="apple-link">
              <img
                src={aaple}
                alt="google"
                width="20px"
                height="20px"
                className="mr-3 apple-img"
              ></img>
              sign up with apple
            </button>
          </div>
          <div className="social-links mt-3">
            <button className="facebook-link">
              <i className="fa-brands fa-facebook mr-3"></i>
              sign up with facebook
            </button>
          </div>
          <h1 className="mt-4 or">or</h1>
          <form className="mt-4 login-form">
            <div class="mb-3">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="username or email"
              ></input>
            </div>
            <div class="mb-3">
              <input
                type="password"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Password"
              ></input>
            </div>
            <div class="mb-3">
              <button className="login-btn">login</button>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Keep me logged in
                </label>
              </div>
              <a href="#" className="forgot-link">
                Forgot your password?
              </a>
            </div>
          </form>
          <h3 className="sign-link mt-4">
            Don't have an account? <a href="/signup">Sign up</a>
          </h3>
        </div>
      </section>
    </>
  );
};
export default Login;
