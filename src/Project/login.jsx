import React from "react";
import Natification from "./notification";

const Login = () => {
    return (
        <div className="mt-5 mb-2">
            <div className="container p-4" style={{ border: '1px solid black', borderRadius: "5px", maxwidth: "400px" }}>
                <h1 className="text-center">Login</h1>
                <br />
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="email" placeholder="Enter Your Email" />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" class="form-control" id="passowrd" placeholder="Password" />
                    <label htmlFor="password">Password</label>
                </div>
                <div className="mb-3 text-center">
                    <button type="submit" className="btn btn-primary w-100">Log in</button>
                </div>
                <small className="text-muted">
                    Need an account? <a href="/SignUp">Sign Up</a>
                </small>
            </div>
        </div>
    );

};
export default Login;