import React from "react";
import "./Nav.css";

function Footer() {
  return (
    <div className="footer container-fluid bg-dark">
      <footer className="text-center text-lg-start  text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <h4 className="text-white">Contact On Social Media</h4>
          </div>

          <div>
            {/* css in nav.css file */}
            <a href className="me-4 link-secondary footiconhover ">
              <i className="bi bi-facebook"></i>
            </a>
            <a href className="me-4 link-secondary footiconhover">
              <i className="bi bi-twitter" />
            </a>
            <a
              href="https://www.google.com/"
              className="me-4 link-secondary footiconhover"
            >
              <i className="bi bi-google" />
            </a>
            <a href className="me-4 link-secondary footiconhover">
              <i className="bi bi-instagram" />
            </a>
            <a href className="me-4 link-secondary footiconhover">
              <i className="bi bi-linkedin" />
            </a>
            <a href className="me-4 link-secondary footiconhover">
              <i className="bi bi-github" />
            </a>
          </div>
          {/* Right */}
        </section>

        {/* Section: Links  */}
        <section className>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 text-light fs-3">
                  <i className="fas fa-gem me-3 text-secondary " />
                  RAS Track App
                </h6>
                <p>
                  <ul className=" text-light fs-5">
                    <li>Making user profiles</li>
                    <li>Planning personalized exercise routines</li>
                    <li>Saving the statistics he/she gets</li>
                  </ul>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 ">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4 text-light fs-3">
                  Service
                </h6>
                <p>
                  <span className="text-light text-uppercase">
                    Nutrition Tracking
                  </span>
                </p>
                <p>
                  <span className="text-light text-uppercase">
                    Integrate geolocation
                  </span>
                </p>
                <p>
                  <span className="text-light text-uppercase">
                    Gamification
                  </span>
                </p>
                <p>
                  <span className="text-light text-uppercase">
                    Social Sharing
                  </span>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4 text-light fs-3">
                  links
                </h6>
                <p>
                  <a href="#!" className=" text-light">
                    HOME
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-light">
                    CLASSES
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-light">
                    ACTIVITES
                  </a>
                </p>
                <p>
                  <a href="" className="text-light">
                    ABOUT
                  </a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4  text-light fs-3">
                  Contact
                </h6>
                <p className=" text-light fs-6">
                  <i className="bi bi-house me-3  text-light " /> KASUR, ST NO
                  10012, PAKISTAN
                </p>
                <p className=" text-light fs-6">
                  <i className="bi bi-envelope me-3 text-light" />
                  info@sajidali10199.com
                </p>
                <p className=" text-light fs-6">
                  <i class="bi bi-phone"></i> +923064608506
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4 text-white fs-5"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}
        >
          Copyright ©sajidali1019@gmail.com
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </div>
  );
}

export default Footer;
