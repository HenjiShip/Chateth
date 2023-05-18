import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setErr(true);
      console.log(error);
    }
  };

  return (
    <div className="form-container">
      <div className="form-border">
        <div className="form-box">
          <span className="logo">Chateth</span>
          <span className="title">Register</span>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="example@chateth.com"
            />
            <input type="password" name="password" placeholder="password" />
            <button>
              <h3>Sign in</h3>
            </button>
            {err && <span>Something went wrong.</span>}
          </form>
          <p>
            Don't have an account?{" "}
            <button
              className="persona-button"
              onClick={() => navigate("/register")}
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
