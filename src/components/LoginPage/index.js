import React, { useState } from "react";
import "./index.css";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Header from "../Header";
const LoginPage = () => {
  const [email, setEmail] = useState("mockapp@reluconsultancy.com");
  const [password, setPassword] = useState("123456");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();
  function handleOnSubmit(event) {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        Cookies.set("userDetails", user.uid, { expires: 30 });

        navigate("/", { replace: true });

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorMessage);
        console.log(errorCode);
        console.log(errorMessage);
      });
  }
  function handleForgetPwd() {
    const email = prompt("Please enter your email");
    sendPasswordResetEmail(auth, email);
    alert("Email sent");
  }
  return (
    <div>
      <Header />

      <main className="login-page">
        <section className="welcome-section">
          <h1>Welcome to Photography & Artists Platform</h1>
          <p>Join our community of passionate photographers and artists.</p>
          <p>Discover stunning visuals and connect with fellow creatives.</p>
        </section>
        <section className="login-section">
          <h2>Sign in</h2>
          <form className="login-form" onSubmit={handleOnSubmit}>
            <input
              type="text"
              placeholder="Enter Email or Username"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <button
              onClick={handleForgetPwd}
              type="button"
              className="recover-password"
            >
              Forgot Password?
            </button>
            <button type="submit" className="login-button">
              Sign in
            </button>
          </form>
          {errorMsg && <p className="error-message">{errorMsg}</p>}
        </section>
      </main>
    </div>
  );
};

export default LoginPage;
