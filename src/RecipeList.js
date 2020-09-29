import React from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ title, recipes, deleteMethod, lists, addToList }) => {
  return (
    <div>
      <h1>{title}</h1>
      <Link to="/recipe/new">New Recipe</Link>
      <Link to="/lists/new">New Grocery List</Link>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          deleteMethod={deleteMethod}
          lists={lists}
          addMethod={addToList}
        />
      ))}
    </div>
  );
};

export default RecipeList;
