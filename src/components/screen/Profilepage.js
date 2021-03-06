import React from "react";
import { Link } from "react-router-dom";

const Profilepage = () => {
  return (
    <section className="section gray-bg" id="resume">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-title">
                            <h2>Profile</h2>
                        </div>
                    </div>
                </div>
      <div className="container">
        <div className="main-body">
          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar6.png"
                      alt="Admin"
                      className="rounded-circle p-1 bg-primary"
                      width="110"
                    />
                    <div className="mt-3">
                      <h4>Ronit Shahi </h4>
                      <p className="text-secondary mb-1">
                        Full Stack Developer
                      </p>
                      <p className="text-muted font-size-sm">
                        3/34 Dartbrook Rd, Auburn, NSW, 2144
                      </p>
                      {/* <button className="btn btn-primary">Follow</button> */}
                      <button className="btn btn-outline-primary">
                        My Portfolio
                      </button>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                          <Link target='_blank' to={{pathname: "https://ronit-shahi-developer.github.io/Ronit-Portfolio/"}}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-globe me-2 icon-inline"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="2" y1="12" x2="22" y2="12"></line>
                          <span class="iconify" data-icon="whh:website" data-inline="false"></span>                        </svg>
                        </Link>
                        Website
                      </h6>
                      {/* <span className="text-secondary">https://bootdey.com</span> */}
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                        <Link target='_blank' to={{ pathname: "https://github.com/Ronit-Shahi-Developer"}}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-github me-2 icon-inline"
                        >
<span class="iconify" data-icon="codicon:github-inverted" data-inline="false"></span>                        </svg>
                        </Link>
                        Github
                      </h6>
                      {/* <span className="text-secondary">bootdey</span> */}
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                          <Link target='_blank' to={{pathname: "https://www.linkedin.com/in/ronit-shahi-033689196/"}}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-instagram me-2 icon-inline text-info"
                        >
<span class="iconify" data-icon="feather-linkedin" data-inline="false"></span>                        </svg>
                      </Link>
                      Linkedin
                      </h6>
                      {/* <span className="text-secondary">@bootdey</span> */}
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                      <Link target='_blank' to={{pathname: "https://www.instagram.com/ronytshahi/"}}>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-instagram me-2 icon-inline text-danger"
                        >
                          <rect
                            x="2"
                            y="2"
                            width="20"
                            height="20"
                            rx="5"
                            ry="5"
                          ></rect>

<span class="iconify" data-icon="akar-icons:instagram-fill" data-inline="false"></span>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                        </Link>
                        Instagram
                      </h6>
                      {/* <span className="text-secondary">bootdey</span> */}
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                      <Link target='_blank' to={{pathname: "https://www.facebook.com/irntohasih/"}}>
                      
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-facebook me-2 icon-inline text-primary"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                        </Link>
                        Facebook
                      </h6>
                      {/* <span className="text-secondary">bootdey</span> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card">
                <div className="card-body">
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        value="Ronit Shahi"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">DOB</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        value="26/10/1995"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        value="ronytshahi@gmail.com"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        value="0449 778 298"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Mobile</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        value="0449 778 298"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        value="3/34 Dartbrook Rd, Auburn, NSW"
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Visa Status</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        value="Temporary Graduate Visa - Subclass 485"
                      />
                    </div>
                  </div>

                  {/* <div className="row">
								<div className="col-sm-3"></div>
								<div className="col-sm-9 text-secondary">
									<input type="button" className="btn btn-primary px-4" value="Save Changes" />
								</div>
							</div> */}
                </div>
              </div>
              <div className="row">
						<div className="col-sm-12">
							<div className="card">
								<div className="card-body">
                                <h5 className="d-flex align-items-center mb-3">About me,</h5>

<p>I am 25 year old guy from Nepal. I recently completed my Masters in Information Syaytem from Central Queensland University, Sydney. I believe in the power of computer technology as a means to make a positive impact in the world and 
    hope to make a significant contribution to the greater good of humanity one day through my endeavours as a software developer.</p>

                                </div></div></div></div>
              {/* <div className="row">
						<div className="col-sm-12">
							<div className="card">
								<div className="card-body">
									<h5 className="d-flex align-items-center mb-3">Project Status</h5>
									<p>Web Design</p>
									<div className="progress mb-3" style={{height: '5px'}}>
										<div className="progress-bar bg-primary" role="progressbar" style={{width: '80'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
									<p>Website Markup</p>
									<div className="progress mb-3" style={{height: '5px'}}>
										<div className="progress-bar bg-danger" role="progressbar" style={{width: '72'}} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
									<p>One Page</p>
									<div className="progress mb-3" style={{height: '5px'}}>
										<div className="progress-bar bg-success" role="progressbar" style={{width: '89'}} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
									<p>Mobile Template</p>
									<div className="progress mb-3" style={{height: '5px'}}>
										<div className="progress-bar bg-warning" role="progressbar" style={{width: '55%'}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
									<p>Backend API</p>
									<div className="progress" style={{height: '5px'}}>
										<div className="progress-bar bg-info" role="progressbar" style={{width: '66%'}} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
								</div>
							</div>
						</div>
					</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Profilepage;
