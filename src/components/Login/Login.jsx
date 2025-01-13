
// import React, { useState } from "react";
// import "./Login.css";

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;
//     console.log("Email:", email);
//     console.log("Password:", password);
//   };

//   return (

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import "./Login.css";

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate(); // Initialize useNavigate

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;
//     console.log("Email:", email);
//     console.log("Password:", password);

//     // Simulate login logic (replace with your actual login API call)
//     if (email === "user@example.com" && password === "password123") {
//       navigate("/"); // Navigate to the home page
//     } else {
//       console.log("Invalid email or password.");
//     }
//   };

//   return (

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("Email:", email);
    console.log("Password:", password);

    // Simulate login logic (replace with your actual login API call)
    if (email === "venu" && password === "venu123") {
      localStorage.setItem("isLoggedIn", true); // Set the isLoggedIn flag
      navigate("/"); // Navigate to the home page
    } else {
      console.log("Invalid email or password.");
    }
  };

  return (
    // Rest of your code remains the same
    <section className="login_section d-flex align-items-center justify-content-center">
      <div className="login_Box shadow rounded-1">
        <div className="logo text-center mb-4">
          <img src="./images/logo4.png" alt="logo" className="img-fluid" />
          <h1 className="h3 pt-2 mt-1">Welcome Back</h1>
          <p className="small_text">Please enter your details to sign in</p>
        </div>

        <div className="d-flex justify-content-between mb-4">
          <div className="google d-flex align-items-center border border-light border-2 w-50 me-2 py-2 rounded justify-content-center">
            <img src="data:image/jpeg;base64,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" width="25px" alt="google" />
            <p className="ms-2">Google</p>
          </div>

          <div className="fb d-flex align-items-center border border-light border-2 w-50 ms-2 py-2 rounded justify-content-center">
            <img src="data:image/jpeg;base64,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" width="25px" alt="facebook" />
            <p className="ms-2">Facebook</p>
          </div>
        </div>

        <div className="mb-4 d-flex">
          <div className="line"></div>
          <small className="or text-center px-2">Or continue with email</small>
          <div className="line"></div>
        </div>

        <form className="needs-validation" onSubmit={handleSubmit} noValidate>
          <div className="login_form">
            <div className="form-floating mb-4">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                required
              />
              <label htmlFor="email" className="small_text">
                Email address
              </label>
              <div className="invalid-feedback">Please provide a valid email.</div>
            </div>

            <div className="form-floating position-relative">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                id="password"
                placeholder="Password"
                required
              />
              <label htmlFor="password" className="small_text">Password</label>
              <i
                id="eye-icon"
                className={`fa fa-eye${showPassword ? "-slash" : ""} position-absolute`}
                aria-hidden="true"
                onClick={togglePasswordVisibility}
              ></i>
              <div className="invalid-feedback">Please provide a password.</div>
            </div>
          </div>

          <div className="text-end mb-4 mt-2">
            <span className="text-end small_text link-primary">Forgot your password?</span>
          </div>

          <button className="btn btn-primary w-100" type="submit">
            Log in
          </button>
          <p className="text-center mt-5 small_text">
            Don't have an account? <a href="#">Create An Account</a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;