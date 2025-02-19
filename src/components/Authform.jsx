import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Authform = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState({ username: "", email: "", password: "", confirmPassword: "" });
    const [userData, setUserData] = useState(null); // Stores registered user details
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignup) {
            if (formData.password !== formData.confirmPassword) {
                alert("Password did not match");
                return;
            }
            // Store user details in state (mimicking a database)
            setUserData({ username: formData.username, email: formData.email, password: formData.password });
            setMessage("Signup Successful! You can now log in.");
            setIsSignup(false); // Switch to login mode automatically
            setFormData({ username: "", email: "", password: "", confirmPassword: "" }); // Clear form
        } else {
            // Check if login credentials match the stored user data
            if (!userData || userData.email !== formData.email || userData.password !== formData.password) {
                setMessage("Invalid email or password.");
                return;
            }
            setMessage(`Login Successful! Welcome, ${userData.username}`);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card p-4 shadow">
                        <h2 className="text-center mb-4">{isSignup ? "Sign Up" : "Login"}</h2>
                        {message && <div className="alert alert-info">{message}</div>}
                        <form onSubmit={handleSubmit}>
                            {isSignup && (
                                <div className="mb-3">
                                    <label className="form-label">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            )}
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            {isSignup && (
                                <div className="mb-3">
                                    <label className="form-label">Confirm Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            )}
                            <button type="submit" className="btn btn-primary w-100">
                                {isSignup ? "Sign Up" : "Login"}
                            </button>
                        </form>
                        <p className="text-center mt-3">
                            {isSignup ? "Already have an account? " : "Don't have an account? "}
                            <button className="btn btn-link" onClick={() => setIsSignup(!isSignup)}>
                                {isSignup ? "Login" : "Sign Up"}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Authform;
