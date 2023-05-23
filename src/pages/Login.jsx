import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />

          <button type="submit" disabled={loading}>
            Sign in
          </button>
        </form>
        <p>
          You don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
      {err && (
        <span
          style={{
            fontSize: "12px",
            background: "rgb(255, 0 ,0, 0.2)",
            padding: "8px",

            border: "1px solid red",
          }}
        >
          Something went wrong..
        </span>
      )}
    </div>
  );
};

export default Login;
