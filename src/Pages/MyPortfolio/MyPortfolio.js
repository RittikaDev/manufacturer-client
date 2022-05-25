import React from "react";
import "./MyPortfolio.css";
import skills from "../../images/skills.jpg";
import graduate from "../../images/graduate.jpg";
import profile from "../../images/profile.png";

const MyPortfolio = () => {
  return (
    <div className="profile">
      <section class="sectioni" id="about">
        <div class="reveal">
          <div class="container">
            <div class="text-center">
              <h2 class="section-heading pb-5">Get To Know Me!</h2>
            </div>
            <ul class="timeline">
              <li className="personal-info">
                <div class="timeline-image">
                  <img class="rounded-full mt-2" src={profile} alt="..." />
                </div>
                <div class="timeline-panel inventory-textbox">
                  <div class="timeline-heading ">
                    <h5 class="subheading text-xl font-bold ">Personal Info</h5>
                  </div>
                  <div class="timeline-body">
                    <p class="">
                      Rittika Dev
                      <div>rittika.dev@gmail.com</div>
                    </p>
                  </div>
                </div>
              </li>
              <li class="timeline-inverted">
                <div class="timeline-image">
                  <img class="rounded-full  img-fluid" src={skills} alt="..." />
                </div>
                <div class="timeline-panel inventory-textbox">
                  <div class="timeline-heading ">
                    <h5 class="subheading text-xl font-bold ">Skills So far</h5>
                  </div>
                  <div class="timeline-body">
                    <p class=" ">
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
                <div class="timeline-image">
                  <img
                    class="rounded-full  img-fluid"
                    src={graduate}
                    alt="..."
                  />
                </div>
                <div class="timeline-panel inventory-textbox">
                  <div class="timeline-heading">
                    <h4>
                      <span class="typing3"></span>
                    </h4>
                    <h5 class="subheading text-xl font-bold ">
                      Graduation & Proffession
                    </h5>
                  </div>
                  <div class="timeline-body">
                    <p class="">
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
              <li class="timeline-inverted timeline-end">
                <div class="timeline-image timeline-image1">
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

      <section class="work-section" id="work">
        <div class="reveal">
          <div class="container">
            <div class="text-center mb-44">
              <h2 class="section-heading pb-5">
                Some Of The Things I've Built!
              </h2>
            </div>
            <div class="work-block">
              <div class="work-wrap">
                <div class="left"></div>
                <div class="right">
                  <div class="content">
                    <h1>Project name</h1>
                    <p>Tech link</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="work-block">
              <div class="work-wrap">
                <div class="right1">
                  <div class="content">
                    <h1>This is a heading</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quia assumenda dolore reprehenderit ullam blanditiis ex
                      sapiente pariatur tempore incidunt facilis?
                    </p>
                  </div>
                </div>
                <div class="left1"></div>
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
