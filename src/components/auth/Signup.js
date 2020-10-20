import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../pageHeader/PageHeader";
import useInput from "./hooks/useInput";

import "./auth.scss";

const SignUp = () => {
  const [email, userEmail] = useInput({ type: "email" });
  const [password, userPassword] = useInput({ type: "password" });
  const [passwordCheck, userPasswordCheck] = useInput({ type: "password" });
  const [displayName, userDisplayName] = useInput({ type: "text" });
  const [error, setError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="auth-container">
      <PageHeader>
        <h2 className="page-header-title">Sign up</h2>
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
            <label>
              Verify password:
              <br />
              {userPasswordCheck}
            </label>

            <label>
              Display name:
              <br />
              {userDisplayName}
            </label>

            <button className="auth-btn" type="submit">
              Sign up
            </button>
          </form>
          <p>
            Already a member? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
