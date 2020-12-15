import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import RecipeList from "../recipeList/RecipeList";
import NewRecipeForm from "../newRecipeForm/NewRecipeForm";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import {
  createRecipe,
  getAllRecipes,
  getOneRecipe,
} from "../../utils/weekly-API";

function AuthenticatedApp() {
  console.log("Auth app");
  const [recipes, setRecipes] = useState();

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
          path="/recipes"
          render={(routeProps) => (
            <RecipeList title="Recipes" recipes={recipes} {...routeProps} />
          )}
        />

        <Route
          exact
          path="/recipe/new"
          render={(routeProps) => (
            <NewRecipeForm saveRecipe={createRecipe} {...routeProps} />
          )}
        />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default AuthenticatedApp;
