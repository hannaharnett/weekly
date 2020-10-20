import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../pageHeader/PageHeader";
import useInput from "./hooks/useInput";

import "./auth.scss";

const Login = () => {
  const [email, userEmail] = useInput({ type: "email" });
  const [password, userPassword] = useInput({ type: "password" });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="auth-container">
      <PageHeader>
        <h2 className="page-header-title">Log in</h2>
      </PageHeader>
      <div className="auth-content">
        <div className="auth-form">
          <form onSubmit={handleSubmit}>
            <label>
              Email:
              <br />
              {userEmail}
            </label>

            <label>
              Password:
              <br /> {userPassword}
            </label>

            <button className="auth-btn" type="submit">
              Log in
            </button>
          </form>
          <p>
            Not a member yet? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
