import React from "react";
import "../App.css";
import nextUser from "../Assests/nextUser.png";
import question from "../Assests/question.jpg";
import reply from "../Assests/reply.jpg";
const Feedback = () => {
  return (
    <section className="feedback">
      <div class="back-container p-4 m-4">
        <div class="container mt-4">
          <div class="row">
            <div class="col col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
              <div class="d-flex justify-content-start flex-column col1">
                <h1 className=" Question Active">Ask Question</h1>
                <h1 className="Help">Get Help</h1>
                <h1 className="Go">Go beyond</h1>
                <p class="mt-2 para">
                  Whether you’re stuck on a history question or a blocked by a
                  geometry puzzle, there’s no question too tricky for Brainly.
                </p>
              </div>
            </div>
            <div class="col col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
              <div class="col2">
                <div class="questionScroll">
                  <div class="d-flex align-items-center flex-row">
                    <img src={question} />
                    <h1>Shimvam kash70707</h1>
                  </div>
                  <div class="QuestionBg mt-3 p-4">
                    <div class="d-flex flex-column">
                      <h1 class="topic">Mathematics</h1>
                      <h1 class="UserQuestion">
                        The multiplicative inverse of 1/16 ÷ 1/81 +-1/8​
                      </h1>
                    </div>
                  </div>
                </div>
                <div class="questionScroll mt-4">
                  <div class="d-flex align-items-center flex-row">
                    <img src={reply} />
                    <h1>amitnrw</h1>
                  </div>
                  <div class="QuestionBg mt-3 p-4">
                    <div class="d-flex flex-column">
                      <h1 class="topic">
                        <b>Given :</b>
                        1/16 ÷ 1/81 + -1/8
                      </h1>
                      <h1 class="UserQuestion">
                        <b>To Find :</b> 1/16 ÷ 1/81 + -1/8
                      </h1>
                      <div class="solution">
                        <h1>
                          <b>Solution:</b>
                        </h1>
                        <h1>
                          a multiplicative inverse is basically a reciprocal
                          Multiplicative inverse of number is the number which
                          if multiplied by original number result in 1 1/16 ÷
                          1/81 + -1/8 1/16 ÷ 1/81 = 81/16 + -1/8 = - 1/8 81/16 -
                          1/8 = 81/16 - 2/16 = (81 - 2)/16 = 79/16
                        </h1>
                      </div>
                      <h1 class="UserQuestion">
                        <b>Multiplicative inverse : 16/79</b>
                      </h1>
                    </div>
                  </div>
                </div>
                <div class="questionScroll mt-4">
                  <div class="d-flex align-items-center flex-row">
                    <img src={nextUser} />
                    <h1>Shoneitszeliapink</h1>
                  </div>
                  <div class="QuestionBg mt-3 p-4">
                    <div class="d-flex flex-column">
                      <h1 class="topic">Biology</h1>
                      <h1 class="UserQuestion">
                        Please explain to me the basic difference between
                        Darwinism and Neo -Darwinism. It gets me totally
                        confused. Thank you!
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Feedback;
