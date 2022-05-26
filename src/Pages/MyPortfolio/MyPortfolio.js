import React from "react";
import "./MyPortfolio.css";
import skills from "../../images/skills.jpg";
import graduate from "../../images/graduate.jpg";
import profile from "../../images/profile.png";
import todo from "../../images/to-do.PNG";
import famreit from "../../images/frameit.PNG";
import dream from "../../images/dream.PNG";

const MyPortfolio = () => {
  return (
    <div className="profile">
      <section className="sectioni" id="about">
        <div className="reveal">
          <div className="container">
            <div className="text-center">
              <h2 className="sm:font-extrabold font-semibold sm:text-3xl text-xl text-center mb-11">
                Get To Know Me!
              </h2>
            </div>
            <ul className="timeline">
              <li className="personal-info">
                <div className="timeline-image">
                  <img className="rounded-full mt-2" src={profile} alt="..." />
                </div>
                <div className="timeline-panel inventory-textbox">
                  <div className="timeline-heading ">
                    <h5 className="subheading text-xl font-bold ">
                      Personal Info
                    </h5>
                  </div>
                  <div className="timeline-body">
                    <p className="">
                      Rittika Dev
                      <div>rittika.dev@gmail.com</div>
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img
                    className="rounded-full  img-fluid"
                    src={skills}
                    alt="..."
                  />
                </div>
                <div className="timeline-panel inventory-textbox">
                  <div className="timeline-heading ">
                    <h5 className="subheading text-xl font-bold ">
                      Skills So far
                    </h5>
                  </div>
                  <div className="timeline-body">
                    <p className=" ">
                      <div>
                        <p>
                          {" "}
                          <span className="font-bold ">1.</span> HTML ,CSS,
                          Bootstrap
                        </p>
                        <p>
                          <span className="font-bold ">2.</span> Tailwind, Daisy
                          UI
                        </p>
                        <p>
                          <span className="font-bold ">3.</span> Angular
                          Material
                        </p>
                        <p>
                          <span className="font-bold ">4.</span> React, Angular
                        </p>
                        <p>
                          <span className="font-bold ">5.</span> NodeJs,
                          Express, MongoDB{" "}
                        </p>
                      </div>
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-image">
                  <img
                    className="rounded-full  img-fluid"
                    src={graduate}
                    alt="..."
                  />
                </div>
                <div className="timeline-panel inventory-textbox">
                  <div className="timeline-heading">
                    <h4>
                      <span className="typing3"></span>
                    </h4>
                    <h5 className="subheading text-xl font-bold ">
                      Graduation & Proffession
                    </h5>
                  </div>
                  <div className="timeline-body">
                    <p className="">
                      <div>
                        <span className="font-bold ">1.</span> Completed
                        graduation in the year 2021.
                      </div>
                      <div>
                        <span className="font-bold ">2.</span> Currently working
                        as a Jr. Software Developer at KDS Group
                      </div>
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted timeline-end">
                <div className="timeline-image timeline-image1">
                  <h4>
                    Next
                    <br />
                    Chapter
                    <br />
                    Begins!
                  </h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Work Section Starts  */}

      <section className="work-section" id="work">
        <div className="reveal">
          <div className="container">
            <div className="text-center mb-44">
              <h2 className="sm:font-extrabold font-semibold sm:text-3xl text-xl text-center mb-11">
                Some Of The Things I've Built!
              </h2>
            </div>
            <div className="work-block">
              <div className="work-wrap">
                <div className="left">
                  <a href="https://to-do-app-69d22.web.app/" target="_blank">
                    <img src={todo} alt="" />
                  </a>
                </div>
                <div className="right">
                  <div className="content">
                    <h1>To-Do App</h1>
                    <p>
                      Live link :
                      <a
                        href="https://to-do-app-69d22.web.app/"
                        target="_blank"
                      >
                        https://to-do-app-69d22.web.app/
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="work-block">
              <div className="work-wrap">
                <div className="right1">
                  <div className="content">
                    <h1>Frame It </h1>
                    <p>
                      <a
                        href=" https://photography-service-3b352.web.app/"
                        target="_blank"
                      >
                        Live Link : https://photography-service-3b352.web.app/
                      </a>
                    </p>
                  </div>
                </div>
                <div className="left1">
                  <a
                    href=" https://photography-service-3b352.web.app/"
                    target="_blank"
                  >
                    <img src={famreit} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="work-block">
              <div className="work-wrap">
                <div className="left">
                  <a
                    href="https://dreamcatcher-convention-center.netlify.app/"
                    target="_blank"
                  >
                    <img src={dream} alt="" />
                  </a>
                </div>
                <div className="right">
                  <div className="content">
                    <h1>Dream-Catcher</h1>
                    <p>
                      Live link :
                      <a
                        href="https://dreamcatcher-convention-center.netlify.app/"
                        target="_blank"
                      >
                        https://dreamcatcher-convention-center.netlify.app/
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Work Section Ends */}
    </div>
  );
};

export default MyPortfolio;
