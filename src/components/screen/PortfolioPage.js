import React from "react";
import movier from "../../restore.png";
import { Link } from "react-router-dom";

const PortfolioPage = () => {
  return (
    <section className="section gray-bg" id="resume">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title">
              <h2>Portfolio</h2>
      
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
                to={{ pathname: "https://apii.fly.dev/catalog" }}
              >
                <img src={movier} alt="" class="card-img-top" />
              </Link>
              <div class="card-body">
              <Link
                  target="_blank"
                  to={{
                    pathname: "https://apii.fly.dev/catalog",
                  }}
                  className="btn btn-outline-success btn-sm"
                >
                  <span
                    class="iconify"
                    data-icon="codicon:eye"
                    data-inline="false"
                  ></span>{" "}
                 Live Preview
                </Link>
                <hr></hr>
                <h5 class="card-title">ReStore</h5>
                <p class="card-text">
                  <strong>Framework:</strong> React, .Net, Material UI
                  <br />
                  <br />
                  - RestFull API<br />
                  - React Router<br />
                  - Error Handling<br />
                  - Shopping Cart<br />
                  - Redux <br />
                  - Paging, sorting, filtering<br />
                  - User Idenity<br />
                  - Checkout Feature<br />
                  - Stripe Payment feature <br />
                  
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
