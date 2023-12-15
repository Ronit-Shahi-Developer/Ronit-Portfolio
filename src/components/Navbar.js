import React from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";

// for react font
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-fixed-top sticky-top navbar-expand-lg navbar-light bg-dark ">
      <div className="container">
        <Link to="/" className="nav-link">
          <img className="logo" src={logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            {/* <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home{" "}
              </Link>
            </li> */}
            <li className="nav-item active">
              <Link to="/Profilepage" className="nav-link">
                About me{" "}
              </Link>
            </li>

            <li className="nav-item active">
              <Link to="/experience" className="nav-link">
                Experience{" "}
              </Link>
            </li>

            <li className="nav-item active">
              <Link to="/edu" className="nav-link">
                Education{" "}
              </Link>
            </li>

            <li className="nav-item active">
              <Link to="/skill" className="nav-link">
                Skill{" "}
              </Link>
            </li>

            <li className="nav-item active">
              <Link to="/portfolio" className="nav-link">
                Portfolio{" "}
              </Link>
            </li>

            {/* <li className="nav-item active">
              <Link to="/contact" className="nav-link">
              Contacts{" "}
              </Link>
            </li> */}



          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
