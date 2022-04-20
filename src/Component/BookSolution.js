import React from "react";
import "../App.css";
import logo from "../Assests/logo.svg";
import { Link } from "react-router-dom";
import book1 from "../Assests/book1.webp";

const BookSolution = () => {
  return (
    <>
      <section className="second-nav">
        <nav class="navbar navbar-expand-lg navbar-light bg-light p-4">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              <img src={logo} alt="" width="100" height="24"></img>
            </a>
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
                <li class="nav-item">
                  <Link class="nav-link" aria-current="page" to="/login">
                    log in
                  </Link>
                </li>
              </ul>
              <button class="btn btn-outline-success">join for free</button>
            </div>
          </div>
        </nav>
      </section>
      <div className="d-flex justify-content-around align-items-center mt-4">
        <div className="row">
          <div className="col">
            <div className="books-detail">
              <div className="book-card">
                <div className="d-flex justify-content-start flex-column">
                  <div className="d-flex justify-content-center align-items-center image p-2">
                    <img src={book1} alt="book1"></img>
                  </div>
                  <h1>
                    500 Selected Problems In Physics for JEE Main & Advanced
                  </h1>
                  <h1 className="other-details mt-2">DC Pandey</h1>
                  <h1 className="other-details mt-2">2021</h1>
                  <h1 className="other-details mt-2">ISBN: 9789312147375</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="chapter-details">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <i class="fa-solid fa-book mr-4"></i> 1. Kinematics
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body"></div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Accordion Item #2
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <strong>This is the second item's accordion body.</strong>
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Accordion Item #3
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <strong>This is the third item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BookSolution;
