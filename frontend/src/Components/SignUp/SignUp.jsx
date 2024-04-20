import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function SignUp() {
  return (
    <div className="container p-5 mt-5 border border-black col-md-5 ">
      <h3 className="text-center pb-3 pt-3 border-bottom border-grey custom-bg">Signup</h3>
      <div className="row container">
        <form className="col-md-12  ">
          <div className="mb-3 mt-4">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className=" mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div className="container text-center pt-4 ">
            <button type="submit" className="btn btn-primary px-5 custom-bg-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
