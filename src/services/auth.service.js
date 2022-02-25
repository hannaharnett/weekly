import axios from "axios";

export const authLogin = async (username, password) => {
  return await axios
    .post(
      "http://localhost:5000/api/user/login",
      { username, password }
      // {
      //   headers: {
      //     Authorization: response.data.token,
      //   },
      // }
    )
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("auth-token", JSON.stringify(response.data.token));
      }
      return response.data.user;
    });
};

export const authLogout = () => {
  localStorage.removeItem("user");
};

export const authSignup = async (username, password) => {
  return await axios.post("http://localhost:5000/signup", {
    username,
    password,
  });
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const isAuthenticated = () => {
  return localStorage.getItem("auth-token");
};
