import React from "react";
import movier from "../../movier.PNG";
import { Link } from "react-router-dom";

const PortfolioPage = () => {
  return (
    <section className="section gray-bg" id="resume">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title">
              <h2>Portfolio</h2>
              <p>
                <strong>Note:</strong> Page might take little time to load at
                first.
                <br />
                <strong>Username:</strong> ronyt <br />
                <strong>Password:</strong> 123456
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-lg-4 mb-4">
            <div class="card">
              <Link
                target="_blank"
                to={{ pathname: "https://musing-poincare-b6d9b6.netlify.app/" }}
              >
                <img src={movier} alt="" class="card-img-top" />
              </Link>
              <div class="card-body">
                <h5 class="card-title">Movie Rater</h5>
                <p class="card-text">
                  <strong>Framework:</strong>React, Django, Bootstrap
                  <br />
                  <br />A simplification of movie streamming applications. Focus
                  on the use and understanding of some crucial react/django
                  concepts and libraries.
                </p>
                <Link
                  target="_blank"
                  to={{
                    pathname: "https://github.com/Ronit-Shahi-Developer/Ronit-Portfolio",
                  }}
                  className="btn btn-outline-success btn-sm"
                >
                  <span
                    class="iconify"
                    data-icon="codicon:github-inverted"
                    data-inline="false"
                  ></span>{" "}
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
