import React, { useState, createContext, useEffect, useContext } from "react";
import axios from "axios";

const AuthContext = createContext({});

const AuthProvider = (props) => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
    error: null,
  });

  const isAuth = async () => {
    let token = localStorage.getItem("auth-token");
    if (token === null) {
      localStorage.setItem("auth-token", "");
      token = "";
    }
    const tokenRes = await axios.post(
      "http://localhost:5000/api/user/tokenIsValid",
      null,
      { headers: { "x-auth-token": token } }
    );
    if (tokenRes) {
      const userRes = await axios.get("http://localhost:5000/api/user/", {
        headers: { "x-auth-token": token },
      });
      setUserData({ token, user: userRes.data });
    }
  };

  useEffect(() => {
    isAuth();
  }, []);

  const authLogin = async (email, password) => {
    try {
      const loginRes = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      setUserData({ token: loginRes.data.token, user: loginRes.data.user });
      localStorage.setItem("auth-token", loginRes.data.token);
    } catch (e) {
      e.response && setUserData({ ...userData, error: e.response.data.msg });
    }
  };

  const authLogout = () => {
    setUserData({
      token: undefined,
      user: undefined,
      error: null,
    });
    localStorage.setItem("auth-token", "");
  };

  const authSignup = async (email, password, passwordCheck, displayName) => {
    try {
      const newUser = { email, password, passwordCheck, displayName };
      await axios.post("http://localhost:5000/signup", newUser);
      // login user automatically when registered
      const loginRes = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      setUserData({ token: loginRes.data.token, user: loginRes.data.user });
      localStorage.setItem("auth-token", loginRes.data.token);
    } catch (e) {
      e.response.data.msg &&
        setUserData({ ...userData, error: e.response.data.msg });
    }
  };

  return (
    <AuthContext.Provider
      value={{ userData, authLogin, authLogout, authSignup }}
      {...props}
    />
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
