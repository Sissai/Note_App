import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../../Components/Header/Header";
import SignUpComp from "../../Components/SignUp/SignUp";
import Footer from "../../Components/Footer/Footer";
export default function SignUp() {
  return (

    <div>
      <Header></Header>
      <SignUpComp></SignUpComp>
      <Footer></Footer>

    </div>




    // <div className="container p-5 mt-5 border border-black col-md-5">
    //   <h3 className="text-center pb-3 pt-3 border-bottom border-grey custom-bg">
    //     Signup
    //   </h3>
    //   <div className="row container">
    //     <form className="col-md-12">
    //       <div className="mb-3 mt-4">
    //         <label htmlFor="username" className="form-label">
    //           Username
    //         </label>
    //         <input type="text" className="form-control" id="username" />
    //       </div>
    //       <div className="mb-3">
    //         <label htmlFor="email" className="form-label">
    //           Email address
    //         </label>
    //         <input
    //           type="email"
    //           className="form-control"
    //           id="email"
    //           aria-describedby="emailHelp"
    //         />
    //         <div id="emailHelp" className="form-text"></div>
    //       </div>
    //       <div className="mb-3">
    //         <label htmlFor="password" className="form-label">
    //           Password
    //         </label>
    //         <input type="password" className="form-control" id="password" />
    //       </div>
    //       <div className="mb-3">
    //         <label htmlFor="confirmPassword" className="form-label">
    //           Confirm Password
    //         </label>
    //         <input
    //           type="password"
    //           className="form-control"
    //           id="confirmPassword"
    //         />
    //       </div>
    //       <div className="container text-center pt-4">
    //         <button
    //           type="submit"
    //           className="btn btn-primary px-5 custom-bg-btn">
    //           Submit
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
  );
}
