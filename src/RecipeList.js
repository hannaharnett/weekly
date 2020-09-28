import React from "react";
import { Link } from "react-router-dom";
import Recipe from "./Recipe";

const List = ({ title, recipes, deleteRecipe }) => {
  return (
    <div>
      <h1>{title}</h1>
      <Link to="/recipe/new">New Recipe</Link>
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe} deleteRecipe={deleteRecipe} />
      ))}
    </div>
  );
};

export default List;
