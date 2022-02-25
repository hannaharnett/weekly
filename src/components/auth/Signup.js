import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useUser } from "../../context/UserContext";
import PageHeader from "../pageHeader/PageHeader";
import useInput from "./hooks/useInput";

import "./auth.scss";

const SignUp = () => {
  const [email, userEmail] = useInput({ type: "email" });
  const [password, userPassword] = useInput({ type: "password" });
  const [passwordCheck, userPasswordCheck] = useInput({ type: "password" });
  const [displayName, userDisplayName] = useInput({ type: "text" });
  const [error, setError] = useState(null);

  const { authSignup, userData } = useAuth();
  let authError = userData.error;
  const user = useUser();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    authSignup(email, password, passwordCheck, displayName);
  };

  useEffect(() => {
    user && history.push("/");
  });

  useEffect(() => {
    setError(authError);
  });

  return (
    <div className="auth-container">
      <PageHeader>
        <h2 className="page-header-title">Sign up</h2>
      </PageHeader>
      <div className="auth-content">
        {error && <p>{error}</p>}
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
