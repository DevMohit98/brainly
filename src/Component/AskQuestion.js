import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assests/logo.svg";
import "../App.css";
const AskQuestion = () => {
  const HandleClick = () => {
    window.location.assign("/free");
  };
  return (
    <>
      <section className="second-nav">
        <nav class="navbar navbar-expand-lg navbar-light bg-light p-4">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              <img src={logo} alt="" width="100" height="24"></img>
            </a>
            <form class="d-flex nav-search ml-4">
              <input
                class="form-control"
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
                <li class="nav-item">
                  <Link class="nav-link" aria-current="page" to="/login">
                    log in
                  </Link>
                </li>
              </ul>
              <button class="btn btn-outline-success" onClick={HandleClick}>
                join for free
              </button>
            </div>
          </div>
        </nav>
      </section>
      <section className="mt-4">
        <div className="container d-flex justify-content-around">
          <div className="row">
            <div className="col">
              <div className="question-center">
                <div className="m-3 p-3">
                  <h1 className="ask-title">
                    Ask a question about your assignment
                  </h1>
                  <div class="mt-3">
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Write your question here (keep it simple and clear to get the best answer)"
                    ></textarea>
                  </div>
                  <div class="dropdown mt-3">
                    <a
                      class="btn btn-secondary dropdown-toggle d-flex justify-content-between align-items-center"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Pick up a Subject
                    </a>

                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <li>
                        <a class="dropdown-item" href="#">
                          Hindi
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Math
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          English
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Geography
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Biology
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Physics
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Chemistry
                        </a>
                      </li>
                    </ul>
                  </div>
                  <button className="btn btn-primary mt-3">
                    Ask your Question
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <h1 className="question-quote">
                MILLIONS OF QUESTIONS ALREADY ANSWERED.
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AskQuestion;
