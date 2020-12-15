import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import Navbar from "../navbar/Navbar";
import Login from "../auth/Login";
import Signup from "../auth/Signup";
import Footer from "../footer/Footer";

function unauthenticatedApp() {
  console.log("Unauth app");
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps) => <Dashboard {...routeProps} />}
        />
        <Route
          exact
          path="/login"
          render={(routeProps) => <Login {...routeProps} />}
        />
        <Route
          exact
          path="/signup"
          render={(routeProps) => <Signup {...routeProps} />}
        />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default unauthenticatedApp;
