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
                    <span className="time">09/2017 - 05/2018</span>
                    <h5>LARAVEL DEVELOPER - Applopers Pvt. Ltd</h5>
                    <p>
                      - Design and development of client and server database
                      applications.
                      <br />
                      - Maintained and updated HTML/CSS templates on a regular
                      basis and as required. <br />
                      - Assisted in planning and implementing dynamic and online
                      electronic commerce applications. <br />
                      - Conducted layout design and construction for a variety
                      of websites as assigned.
                      <br /> - One of the site that I worked/assisted on :
                      https://www.babyshopnepal.com/
                    </p>
                  </li>
                  <li>
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
                  </li>
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
                    <span className="time">01/2021 - Present</span>
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
                    <span className="time">2018 - 07/2021</span>
                    <h5>CAFE ALL ROUNDER - Cassandra's on the Park</h5>
                    <p>
                    - Taking orders, serving, food preparation, making smoothies.

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
