import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../Asset";
import { navLinks } from "../../Constants";

function Navbar(props) {
  return (
    <div className="sticky-top">
      <nav className="pt-3 navbar navbar-expand-lg navbar-light background-dark paddingX">
        {/* <img src={logo} alt="" /> */}
        <h1 className="font-clash text-white">Digi-Corn</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {navLinks.map((link) => (
              <li className="nav-item">
                <Link className="nav-link text-white mx-4 pulse" to={`${link.link}`}>
                  {link.title}
                </Link>
              </li>
            ))}
            <button className="btn background-secondary rounded-pill px-5 py-2">
              Connect Wallet
            </button>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
