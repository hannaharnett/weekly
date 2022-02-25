import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useUser } from "../../context/UserContext";
import PageHeader from "../pageHeader/PageHeader";
import useInput from "./hooks/useInput";

import { authLogin } from "../../services/auth.service";

import "./auth.scss";

const Login = () => {
  const [email, userEmail] = useInput({ type: "email" });
  const [password, userPassword] = useInput({ type: "password" });
  const [error, setError] = useState(null);

  const { userData } = useAuth();
  let authError = userData.error;
  const user = useUser();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    authLogin(email, password);
  };

  useEffect(() => {
    user && history.push("/");
  });

  useEffect(() => {
    if (authError) setError(authError);
  });

  return (
    <div className="auth-container">
      <PageHeader>
        <h2 className="page-header-title">Log in</h2>
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
