import React from "react";
import RecipeCard from "./RecipeCard";

import "./recipeList.scss";

const RecipeList = ({ recipes, lists, addToList }) => {
  return (
    <>
      <h2 className="visually-hidden">All recipes</h2>
      <ul className="recipe-list-ul">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            lists={lists}
            addMethod={addToList}
          />
        ))}
      </ul>
    </>
  );
};

export default RecipeList;
