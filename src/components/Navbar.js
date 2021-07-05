import React from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";

// for react font
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons"


const Navbar = () => {
  return (
    <nav className="navbar navbar-fixed-top sticky-top navbar-expand-lg navbar-light bg-dark ">
      <div className="container">

      <a className="navbar-brand" href="#">
        <img className="logo" src={logo} alt="" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <FontAwesomeIcon icon={faBars} style={{color: '#fff'}} />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link" >
              Home{" "}
            </Link>
            </li>
            <li className="nav-item active">
            <Link to='/Profilepage' className="nav-link" >
              About me{" "}
            </Link> 
            </li>
            
            <li className="nav-item active">
              <Link to='/experience' className="nav-link" >
              Experience{" "}
            </Link>
            </li>

            <li className="nav-item active">
              <Link to='/edu' className="nav-link">
              Education{" "}
            </Link>
            </li>


            


          <li className="nav-item">
            <a className="nav-link" href="#">
              Portfolio
            </a>
            </li>


            <li className="nav-item active">
            <a className="nav-link" href="#">
              Contacts
            </a>
          </li>
                 
        </ul>
      </div>
      </div>

    </nav>
  );
};

export default Navbar;
