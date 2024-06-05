import React, { useContext, useState } from "react";
import "./index.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";
import UserContext from "../../context/UserContext";
import Cookies from "js-cookie";
import Header from "../Header";
const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const value = useContext(UserContext);
  const { setCurrentUser } = value;
  function handleSignUp(event) {
    event.preventDefault();
    // const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        navigate("/", { replace: true });
        const user = userCredential.user;
        setCurrentUser(user.uid);
        Cookies.set("userDetails", user.uid, { expires: 30 });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);

        setErrorMsg(errorMessage);
        // ..
      });
  }
  return (
    <div>
      <Header />

      <main className="signup-page">
        <section className="welcome-section">
          <h1>Join Photography & Artists Platform</h1>
          <p>Start showcasing your work and connecting with other creatives.</p>
          <Link to="/login" className="login-link">
            Already have an account? Sign in
          </Link>
        </section>
        <section className="signup-section">
          <h2>Create an Account</h2>
          <form className="signup-form" onSubmit={handleSignUp}>
            <input type="text" placeholder="Full Name" />
            <input
              type="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <input type="password" placeholder="Confirm Password" />
            <button type="submit" className="signup-button">
              Sign Up
            </button>
          </form>
          {errorMsg && <p className="error-message">{errorMsg}</p>}
        </section>
      </main>
    </div>
  );
};

export default SignUpPage;
