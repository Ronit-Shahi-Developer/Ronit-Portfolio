import React from "react";

const ExperiencePage = () => {
  return (
    <div>
      <section className="section gray-bg" id="resume">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title">
                <h2>Experience</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 m-15px-tb">
              <div className="resume-box">
                <ul>


                <li>
                    <div className="icon">
                      <i className="fas fa-user-graduate"></i>
                    </div>
                    <span className="time">03/2022 - 11/2023</span>
                    <h5>Full Stack Developer - Get Messiah Pty. Ltd. </h5>
                    <p>
                      - Laravel, React, Tailwind, Docker, AWS.
                      <br />
                      - Meta, Google, LinkedIn, and TikTok’s marketing APIs.<br />
                      - Utilized Facebook's Pixel and Conversions API (CAPI).<br />
                      - Stripe billing subscription using Laravel Cashier. <br />
                      - Stripe webhooks <br />
                      - ChatGPT API for analysis and generating reports. <br />

                    </p>
                  </li>

                <li>
                    <div className="icon">
                      <i className="fas fa-user-graduate"></i>
                    </div>
                    <span className="time">10/2021 - 01/2022</span>
                    <h5>Web Developer (Intern) - NSW Liquor Logistics Pty. Ltd. </h5>
                    <p>
                      - Built company site.
                      <br />
                      - Used ecwid platform.<br />
                      - Contributed to development and maintenance of website.<br />
                    </p>
                  </li>

                  <li>
                    <div className="icon">
                      <i className="fas fa-user-graduate"></i>
                    </div>
                    <span className="time">09/2017 - 05/2018</span>
                    <h5>Laravel Developer (Intern + Placement) - Applopers Pvt. Ltd</h5>
                    <p>
                      - Gained proficiency in the Laravel framework.
                      <br />
                      - Implemented user-centric features across projects. <br />
                      - GitHub as version control.<br />
                      <br /> 
                    </p>
                  </li>
                  {/* <li>
                    <div className="icon">
                      <i className="fas fa-user-graduate"></i>
                    </div>
                    <span className="time">06/2017 - 08/2017</span>
                    <h5>WEB DEVELOPER INTERN - E-Prabidhi Pvt. Ltd</h5>
                    <p>
                      <br />
                      - Assisted in the development of eCommerce website
                      catering to different customers
                      <br /> - Developed user interface and improved website
                      usability
                      <br /> - Supported in the development of cart-system,
                      multi-authentication, search filters, user login, and
                      registration.
                      <br /> - Used Laravel framework to built the system.
                    </p>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-lg-6 m-15px-tb">
              <div className="resume-box">
                <ul>
                  <li>
                    <div className="icon">
                      <i className="fas fa-briefcase"></i>
                    </div>
                    <span className="time">01/2021 - 01/2022</span>
                    <h5>BAKER HAND - Sonoma Bakery </h5>
                    <p>
                      - Dusting <br />
                      - Folding <br />
                      - Making Kush <br />
                      - Basketing <br />
                      - Tipping and operating rheon machine
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fas fa-briefcase"></i>
                    </div>
                    <span className="time">07/2018 - 07/2021</span>
                    <h5>CAFE ALL ROUNDER - Cassandra's on the Park</h5>
                    <p>
                    - Taking orders  <br />
                    - Serving  <br />
                    - Food preparation, making smoothies. <br />

                    </p>
                  </li>
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;
