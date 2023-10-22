import React, { useState } from "react";
import "./Login.css";

export default function FormLogin() {
  return (
    <section
      className="h-100 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "#eee" }}
    >
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="d-flex justify-content-center align-items-center col-md-6">
            <div className="text-black">
              <div className="p-md-5 mx-md-4">
                <div className="text-center">
                  {/* <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-htmlForm/lotus.webp"
              style={{ width: "185px" }}
              alt="logo"
            /> */}
                  <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                </div>

                <form className="flex-column">
                  <p>Please login to your account</p>

                  <div className="d-flex flex-column mb-4">
                    <label
                      className="htmlForm-label"
                      htmlFor="htmlForm2Example11"
                    >
                      Identifiant
                    </label>
                    <input
                      type="email"
                      id="htmlForm2Example11"
                      className="htmlForm-control"
                    />
                  </div>

                  <div className="htmlForm-outline d-flex flex-column mb-4">
                    <label
                      className="htmlForm-label"
                      htmlFor="htmlForm2Example22"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="htmlForm2Example22"
                      className="htmlForm-control"
                    />
                  </div>

                  <div className="text-center d-flex justify-content-between align-items-center">
                    <button
                      className="btn btn-primary btn-block fa-lg mb-3"
                      type="button"
                    >
                      Log in
                    </button>
                    {/* <a className="text-muted" href="#!">
                      Forgot password?
                    </a> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center bg-dark">
            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 className="mb-4">We are more than just a company</h4>
              <p className="small mb-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
