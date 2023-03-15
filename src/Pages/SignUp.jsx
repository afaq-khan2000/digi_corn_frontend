import React, { useState } from "react";
import { logo, register } from "../Asset";
import userService from "../services/UserService";
import { failure, success } from "../utils/notification";

function SignUp(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="paddingX background-dark pb-10 w-100 mx-auto">
      <section className="background-dark" style={{ minHeight: "100vh" }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            userService
              .signup({ name, email, password })
              .then((data) => {
                success(data.message);
              })
              .catch((err) => {
                failure(err.response.data.message);
              });
          }}
        >
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-xl-10">
                <div
                  className="card background-gray text-white"
                  // style={{ borderRadius: "1rem", borderColor: "#0c2c07" }}
                >
                  <div className="row g-0">
                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                      <img
                        src={register}
                        alt="login form"
                        className="img-fluid"
                        style={{ borderRadius: "1rem 0 0 1rem" }}
                      />
                    </div>
                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                      <div className="card-body p-4 p-lg-5 font-dark-green">
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <img src={logo} width={"150px"} />
                        </div>

                        <h5
                          className="fw-normal mb-3 pb-3 font-clash h3"
                          style={{ letterSpacing: "1px" }}
                        >
                          <span className="text-gradient">Register</span> your
                          account
                        </h5>

                        <div className="form-outline mb-4">
                          <input
                            required
                            type="text"
                            id="name"
                            className="form-control form-control-lg background-gray rounded-border paraColor formInput"
                            value={name}
                            onChange={(e) => {
                              setName(e.target.value);
                            }}
                          />
                          <label className="form-label" for="email">
                            User Name
                          </label>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            required
                            type="email"
                            id="email"
                            className="form-control form-control-lg background-gray rounded-border paraColor formInput"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                          />
                          <label className="form-label" for="email">
                            Email address
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            required
                            type="password"
                            id="password"
                            className="form-control form-control-lg background-gray rounded-border paraColor formInput"
                            value={password}
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                          />
                          <label className="form-label" for="password">
                            Password
                          </label>
                        </div>

                        <div className="pt-1 mb-4">
                          <button
                            type="submit"
                            style={{ border: "none" }}
                            className="btn btn-lg background-secondary rounded-pill px-5 py-2 text-white"
                          >
                            Register
                          </button>
                          {/* <SweetAlert2
                            {...swalProps}
                            onConfirm={() => {
                              navigate(0);
                            }}
                          /> */}
                        </div>

                        <a href="#!" className="small font-dark-green">
                          Terms of use.
                        </a>
                        <a href="#!" className="small font-dark-green">
                          Privacy policy
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default SignUp;
