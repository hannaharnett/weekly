import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import RecipeList from "../recipeList/RecipeList";
import NewRecipeForm from "../newRecipeForm/NewRecipeForm";
import NewListForm from "../newListForm/NewListForm";
import Lists from "../lists/Lists";
import List from "../lists/list/List";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Recipe from "../recipe/Recipe";

import "./app.scss";

function App() {
  const savedRecipes = JSON.parse(window.localStorage.getItem("recipes"));
  const [recipes, setRecipes] = useState(savedRecipes || []);
  const savedLists = JSON.parse(window.localStorage.getItem("lists"));
  const [lists, setLists] = useState(savedLists || []);

  const findList = (id) => {
    return lists.find((list) => {
      return list.id === id;
    });
  };
  const saveRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  const deleteRecipe = (id) => {
    setRecipes((prevState) => prevState.filter((recipe) => recipe.id !== id));
  };

  const saveList = (newList) => {
    setLists([...lists, newList]);
  };
  const deleteList = (id) => {
    setLists((prevState) => prevState.filter((list) => list.id !== id));
  };

  const addToList = (id, recipe) => {
    const list = findList(id);
    list.recipes.push(recipe);
    syncLSLists();
  };

  const syncLSRecipes = () => {
    window.localStorage.setItem("recipes", JSON.stringify(recipes));
  };

  const syncLSLists = () => {
    window.localStorage.setItem("lists", JSON.stringify(lists));
  };

  useEffect(() => {
    syncLSRecipes();
  }, [recipes]);
  useEffect(() => {
    syncLSLists();
  }, [lists]);
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps) => <Dashboard lists={lists} {...routeProps} />}
        />

        <Route
          path="/recipes"
          render={(routeProps) => (
            <RecipeList
              title="Recipes"
              recipes={recipes}
              deleteMethod={deleteRecipe}
              lists={lists}
              addToList={addToList}
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

        <Route
          path="/recipe/:id"
          render={(routeProps) => (
            <Recipe
              addToList={addToList}
              deleteRecipe={deleteRecipe}
              {...routeProps}
            />
          )}
        />

        <Route
          path="/lists"
          render={(routeProps) => <Lists lists={lists} {...routeProps} />}
        />

        <Route
          path="/list/new"
          render={(routeProps) => (
            <NewListForm saveList={saveList} {...routeProps} />
          )}
        />

        <Route
          path="/list/:id"
          render={(routeProps) => (
            <List
              list={findList(routeProps.match.params.id)}
              lists={lists}
              deleteList={deleteList}
              addToList={addToList}
              {...routeProps}
            />
          )}
        />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;