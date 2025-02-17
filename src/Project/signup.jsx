import React from "react";

const SignUp = () => {
    return (
        <div className="mt-5 mb-5">
            <div className="container p-4" style={{ border: '1px solid black', borderRadius: "5px", maxWidth: "400px" }}>
                <h1 className="text-center">Sign Up</h1>
                <br />
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="name" placeholder="Enter Your Name" />
                    <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="email" placeholder="Enter Your Email" />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="password" placeholder="Enter Your Password" />
                    <label htmlFor="password">Password</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="reenterpassword" placeholder="Re-enter Your Password" />
                    <label htmlFor="reenterpassword">Re-enter Password</label>
                </div>
                <div className="mb-3 text-center">
                    <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                </div>
                <small className="text-muted">
                    Already have an account? <a href="/login">Login</a>
                </small>
            </div>
        </div>
    );
};
export default SignUp;
