import React from "react";
import { Link } from "react-router-dom";
import img from "../img/logo1.png";
import "./Nav.css";

function Header() {
  return (
    <>
      <nav className="navbar bg-dark navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={img} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                ExerciseTrackApp
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center align-items-center bg-priary flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/">
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/about">
                    ABOUT US
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/classes">
                    CLASSES
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/FoData">
                    ACTIVITES
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/Footer">
                    CONTACT US
                  </Link>
                </li>
              </ul>
              <div className="navletflogo">
                <a className="navbar-brand" href="#">
                  <img src={img} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
