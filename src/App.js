import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RecipeList from "./RecipeList";
import NewRecipeForm from "./NewRecipeForm";

function App() {
  const savedRecipes = JSON.parse(window.localStorage.getItem("recipes"));
  const [recipes, setRecipes] = useState(savedRecipes || []);

  const saveRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  const deleteRecipe = (id) => {
    setRecipes((prevState) => prevState.filter((recipe) => recipe.id !== id));
  };

  const syncLocalStorage = () => {
    window.localStorage.setItem("recipes", JSON.stringify(recipes));
  };

  useEffect(syncLocalStorage, [recipes]);
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <RecipeList
              title="Recipes"
              recipes={recipes}
              deleteRecipe={deleteRecipe}
              {...routeProps}
            />
          )}
        />

        <Route
          path="/recipe/new"
          render={(routeProps) => (
            <NewRecipeForm saveRecipe={saveRecipe} {...routeProps} />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
