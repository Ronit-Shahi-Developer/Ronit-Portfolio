import React from 'react'
import edu from '../../edu.png'

const EducationPage = () => {
    return (
        <div>
      <section className="section gray-bg" id="resume">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title">
                <h2>Education</h2>
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
                    <span className="time">07/2018 - 07/2020</span>
                    <h5>Master of Information Systems - CQUniversity</h5>

                    <p>
                        <strong>- Key areas:
                             
                            </strong><br />
                            Software design and development, Mobile applicattion development, Project Management, mobile game development, Database design and development

                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fas fa-user-graduate"></i>
                    </div>
                    <span className="time">08/2013 - 11/2017</span>
                    <h5>Bachelor in Information
MANAGEMENT - NCCS</h5>
                    <p>
                        <strong>- Key areas:</strong><br />
                    Operating System, Computer hardware and Software, C++, Java, PHP, ASP.NET and Python
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 m-15px-tb">
              {/* <div className="resume-box"> */}
                
                 
                <img src ={edu} width="100%"  />
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
    )
}

export default EducationPage

