import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../Constants";

function Footer(props) {
  return (
    <div className="row background-gray paddingX text-white w-100 paddingX py-5 mx-auto">
      <div className="col-12 col-md-6 col-lg-4">
        <h3 className="font-clash">Digi-Corn</h3>
        <p className="paraColor h5">
          A marketplace where you can sell and buy Nfts
        </p>
      </div>
      <div className="col-12 col-md-6 col-lg-4">
        <h3 className="font-clash">Explore</h3>
        {navLinks.map((link) => (
          <Link to={link.link} style={{textDecoration:"none"}}>
            <p className="paraColor h5 my-4 translateX">{link.title}</p>
          </Link>
        ))}
      </div>
      <div className="col-12 col-lg-4">
        <h1 className="font-clash">Join our weekly digest</h1>
        <div className="row mt-4">
          <div className="col-12 col-lg-8">
            <input
              type="text"
              className="form-control form-control-lg rounded-border"
              placeholder="Enter your Email here"
            />
          </div>

          <div className="col-12 col-md-4">
            <button className="btn btn-lg background-secondary rounded-pill py-2 text-white my-3 my-lg-0">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
