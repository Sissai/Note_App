import React from "react"

const Register = (props) => {
  return (
    <div className="container border p-3 mx-auto m-4">
        <h3 class="text-center p-2 border-bottom">
            Register
        </h3>
        <div class="col-md-10 mx-auto p-3">
            <form action="/">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">User Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="text-center">
                    <button type="submit" class="btn btn-primary m-3 px-5">Register</button>
                </div>
            </form>
        </div>
        <div class="border-top">
            <p class="text-center p-3">Already a User?</p>
                <div class="text-center">
                    <a href="/" class="btn btn-primary px-5">Sign In</a>
                </div>
        </div>
    </div>
    
    )
};

export default Register;
