import React from "react";
import "../App.css";
import logo from "../Assests/logo.svg";
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
        <div className="container">
          <div className="row d-flex justify-content-around">
            <div className="col col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="loginForm p-4">
                <h1>Login in</h1>
                <form className="mt-3">
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter username or email"
                    />
                  </div>
                  <div class="mb-3 mt-4">
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Enter password"
                    />
                  </div>
                  <button className="btn btn-primary mt-3">Log in</button>
                </form>
                <p className="mt-3">
                  I don't have account , <a href="/signup">join now</a>
                </p>
              </div>
            </div>
            <div className="col col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
              <h1 className="mt-3 loginQuote">let's start sharing knowlege</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
