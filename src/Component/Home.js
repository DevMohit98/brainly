import React from "react";
import logo from "../Assests/logo.svg";
import banner from "../Assests/banner.png";
import book1 from "../Assests/book1.webp";
import book2 from "../Assests/book2.webp";
import book3 from "../Assests/book3.jpeg";
import book4 from "../Assests/book4.jpeg";
import play from "../Assests/play.png";
import apple from "../Assests/apple.png";
import { Link } from "react-router-dom";
import "../App.css";
const Home = () => {
  const HandleClick = () => {
    window.location.assign("/solution");
  };
  return (
    <>
      {/*navbar and banner */}
      <section className="wrapper">
        {/* navbar */}
        <section id="header" className="p-4 mb-2">
          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <img src={logo} alt="logo" width="130" height="50"></img>
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
                    <Link class="nav-link " aria-current="page" to="/login">
                      log in
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/signup">
                      join now
                    </Link>
                  </li>
                </ul>
                <button class="btn btn-outline-success">
                  <Link to="/question">Ask Question</Link>
                </button>
              </div>
            </div>
          </nav>
        </section>
        {/* banner */}
        <section className="banner">
          <div className="container py-3">
            <div className="row mt-4">
              <div className="col col-xl-8 col-md-12">
                <h1 className="banner-title">
                  Go from questioning to understanding
                </h1>
                <p className="banner-para pt-3">
                  Brainly is the knowledge-sharing community where 350 million
                  students and experts put their heads together to crack their
                  toughest homework questions.
                </p>
                <div className="search m-4 p-4">
                  <form className="d-flex justify-content-between align-items-center">
                    <input
                      type="text"
                      placeholder="What is your question ? "
                    ></input>
                    <button className="search-btn">
                      <i class="fa-solid fa-magnifying-glass fa-2x"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div className="col col-xl-4">
                <img src={banner} alt="banner" className="bannerimg mt-4"></img>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/*books */}
      <section className="p-4 m-4">
        <div className="d-flex justify-content-center align-items-center flex-column">
          <h1 className="new-books text-center">New on brainly</h1>
          <p className="discover-para mt-2">
            Discover more with Textbook Solutions
          </p>
          <p className="booksFind">
            Here you can find step by step solutions to the problems in your
            textbook, created by experts.
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="d-flex justify-content-center align-items-center">
                <div className="book-card p-4">
                  <div className="d-flex justify-content-center align-items-center flex-column">
                    <img src={book1} alt="book1" onClick={HandleClick}></img>
                    <h1>
                      500 Selected Problems In Physics for JEE Main & Advanced
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="d-flex justify-content-center align-items-center">
                <div className="book-card p-4">
                  <div className="d-flex justify-content-center align-items-center flex-column">
                    <img src={book2} alt="book1" onClick={HandleClick}></img>
                    <h1>
                      A Compact and Comprehensive Book of IIT Foundation
                      Mathematics - Class 8
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="d-flex justify-content-center align-items-center">
                <div className="book-card p-4">
                  <div className="d-flex justify-content-center align-items-center flex-column">
                    <img src={book3} alt="book1" onClick={HandleClick}></img>
                    <h1>NCERT Class 9 Mathematics</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="d-flex justify-content-center">
                <div className="book-card p-4">
                  <div className="d-flex justify-content-center align-items-center flex-column">
                    <img src={book4} alt="book1" onClick={HandleClick}></img>
                    <h1>NCERT Class 10 Mathematics Solutions</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-4">
          <button className="btn-find">find your book</button>
        </div>
      </section>
      {/* reviews */}
      <section className=" d-flex justify-content-center align-items-center flex-column p-4 m-4">
        <div className="d-flex justify-content-center align-items-center flex-column mt-4">
          <h1 className="review-text">
            Ruled by students, supported by parents
          </h1>
          <h1 className="rating mt-4">4.5</h1>
        </div>
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="carousel-container">
                <div class="carousels mt-4">
                  <div class="carousel-content d-flex justify-content-center align-items-center flex-column">
                    <h1 class="text-center">Katie B</h1>
                    <p class="post text-center">
                      This app is so much more than I expected. I was just
                      needing help to figure out a math problem, but I was
                      surprised with what I found. There are very few to no ads
                      and they don't cover the whole screen. You help other
                      people with whatever homework question is submitted and
                      you can submit your own too. The replies always come
                      really quickly and are so helpful. The best Homework Help
                      app I have ever used.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="carousel-container">
                <div class="carousels mt-4">
                  <div class="carousel-content d-flex justify-content-center align-items-center flex-column">
                    <h1 class="text-center">Nishant Keni</h1>
                    <p class="post text-center">
                      Very good app!! Helps me get good quality answers in short
                      time and also let's me help others with their problems.
                      Very good and well made app layout too, looks very
                      professional and has smooth functionality. Highly
                      recommend this for a student of any range, let be a topper
                      or slow learner. It will surely help you hone your skills
                      and knowledge.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="carousel-container">
                <div class="carousels mt-4">
                  <div class="carousel-content d-flex justify-content-center align-items-center flex-column">
                    <h1 class="text-center">Trishanta Vlogs Assam</h1>
                    <p class="post text-center">
                      Very good app!! Help me get good quality answers in short
                      time and also let 's me help others with their problems.
                      Very good and well made app layout too , looks very
                      professional and has in the smooth of functionality.
                      Highly recommend this for a student of any become let be a
                      topper or slow learn it will surely help you hone your
                      skills and in knowledge
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="carousel-container">
                <div class="carousels mt-4">
                  <div class="carousel-content d-flex justify-content-center align-items-center flex-column">
                    <h1 class="text-center">Charls Raju</h1>
                    <p class="post text-center">
                      OMG this app is just fantastic. This is the ultimate free
                      tool for any student who cannot afford a subscription. I
                      myself personally love it. It comes up with the solution
                      of almost every question related to your syllabus. And it
                      has a special feature that it has the solution of every
                      subject of a specific syllabus by selecting your board. So
                      I conclude my words. Absolutely loving it. Everyone should
                      try it atleast once. Thank you
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </section>
      {/* question */}
      <section
        id="question"
        className="mt-4 p-4 d-flex justify-content-between align-items-center"
      >
        <div className="d-flex justify-content-start flex-column">
          <h1 className="question-title">What do you need to know?</h1>
          <h1 className="question-para">
            Whether you’re stuck on a history question or a blocked by a
            geometry puzzle, there’s no question too tricky for Brainly.
          </h1>
        </div>
        <button class="btn btn-outline-success">Ask questions</button>
      </section>
      {/* footer */}
      <section className="p-4 footer-section">
        <footer>
          <div className="container text-center text-md-left">
            <div className="row text-center text-md-left">
              <div className="col col-xl-2 col-md-4 col-12">
                <div className="d-flex justify-content-center  flex-column">
                  <h1 className="col1-heading">WE'RE IN THE KNOW</h1>
                  <button className="youtube-bg mt-3">
                    <i class="fa-brands fa-youtube fa-1x"></i>
                  </button>
                  <p className="text-start mt-3 cookie-para">
                    This site is using cookies under cookie policy . You can
                    specify conditions of storing and accessing cookies in your
                    browser
                  </p>
                </div>
              </div>
              <div className="col col-xl-2 col-md-4 col-12">
                <h1 className="links-heading">Company</h1>
                <div className="footer-links d-flex flex-column mt-3">
                  <a href="#" className="links">
                    About us
                  </a>
                  <a href="#" className="links">
                    Blog
                  </a>
                  <a href="#" className="links">
                    Carreers
                  </a>
                  <a href="#" className="links">
                    Advertise with us
                  </a>
                  <a href="#" className="links">
                    Term of use
                  </a>
                  <a href="#" className="links">
                    Copyright Policy
                  </a>
                  <a href="#" className="links">
                    Privay Policy
                  </a>
                  <a href="#" className="links">
                    Cookie Policy
                  </a>
                </div>
              </div>
              <div className="col col-xl-3 col-md-4 col-12">
                <h1 className="links-heading">Community</h1>
                <div className="footer-links d-flex flex-column mt-3">
                  <a href="#" className="links">
                    Brainly Community
                  </a>
                  <a href="#" className="links">
                    Brainly for Schools and Teachers
                  </a>
                  <a href="#" className="links">
                    Brainly for Parents
                  </a>
                  <a href="#" className="links">
                    Honor Code
                  </a>
                  <a href="#" className="links">
                    Community Guidelines
                  </a>
                  <a href="#" className="links">
                    Insights: The Brainly Blog
                  </a>
                  <a href="#" className="links">
                    Become a Volunteer
                  </a>
                </div>
              </div>
              <div className="col col-xl-2 col-lg-4 col-md-4 col-12">
                <h1 className="links-heading">Help</h1>
                <div className="footer-links d-flex flex-column mt-3">
                  <a href="#" className="links">
                    Signup
                  </a>
                  <a href="#" className="links">
                    Help Center
                  </a>
                  <a href="#" className="links">
                    Saftey Center
                  </a>
                </div>
              </div>
              <div className="col col-xl-2 col-lg-4 col-md-4 col-12">
                <h1 className="links-heading">Get the Brainly App </h1>
                <div className="d-flex justify-content-center align-items-center mt-3">
                  <a href="#">
                    <img src={play} alt="playstore"></img>
                  </a>
                  <a href="#">
                    <img src={apple} alt="applestore" className="ml-2"></img>
                  </a>
                </div>
                <div class="dropdown mt-3">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Brainly.in
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a class="dropdown-item" href="#">
                      PL: Brainly.pl
                    </a>
                    <a class="dropdown-item" href="#">
                      Ru: Znanija.com
                    </a>
                    <a class="dropdown-item" href="#">
                      ES: Brainly.lat
                    </a>
                    <a class="dropdown-item" href="#">
                      PT: Brainly.com.br
                    </a>
                    <a class="dropdown-item" href="#">
                      FR: Nosdevoris.fr
                    </a>
                    <a class="dropdown-item" href="#">
                      TR:Eodev.com
                    </a>
                    <a class="dropdown-item" href="#">
                      RO: Brainly.ro
                    </a>
                    <a class="dropdown-item" href="#">
                      ID: Brainly.co.id
                    </a>
                    <a class="dropdown-item" href="#">
                      HI: Brainly.in
                    </a>
                    <a class="dropdown-item" href="#">
                      PH: Brainly.ph
                    </a>
                    <a class="dropdown-item" href="#">
                      US: Brainly.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};
export default Home;
