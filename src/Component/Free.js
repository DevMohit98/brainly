import React from "react";
import "../App.css";
import google from "../Assests/google.png";
import aaple from "../Assests/aaple.png";
import { Link } from "react-router-dom";
const Join = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column mt-4">
        <h1 className="text-center join-title mt-3">
          Get verified answers to improve your grades
        </h1>
        <p className="join-para text-center mt-3">
          Create an account now to get verified answers from our community of
          350+ million teachers and students
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
        <div className="d-flex justify-content-center align-items-center mt-4">
          <h1 className="already-title mr-2">Already have an account?</h1>
          <Link to="/login" className="login-link">
            Log in
          </Link>
        </div>
        <h3 className="privacy-link mt-4 pt-4">
          By signing up, you accept the Brainly <b>Terms of Service</b> ⬈ &
          <b> Privacy Policy</b> ⬈
        </h3>
      </div>
    </>
  );
};
export default Join;
