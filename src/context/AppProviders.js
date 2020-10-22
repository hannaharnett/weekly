import React from "react";
import { AuthProvider } from "../context/AuthContext";
import { UserProvider } from "../context/UserContext";

const AppProviders = ({ children }) => {
  return (
    <AuthProvider>
      <UserProvider>{children}</UserProvider>
    </AuthProvider>
  );
};

export default AppProviders;
