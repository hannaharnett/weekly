import React from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import PageHeader from "./PageHeader";

import "./recipeList.scss";

const RecipeList = ({ recipes, lists, addToList }) => {
  return (
    <div className="all-recipes-container">
      <PageHeader>
        <h1 className="page-header-title">All recipes</h1>
        <div className="btn-wrap">
          <Link to="/recipe/new">
            <button className="list-btn">New Recipe</button>
          </Link>
          <Link to="/list/new">
            <button className="list-btn">New List</button>
          </Link>
        </div>
      </PageHeader>

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
    </div>
  );
};

export default RecipeList;
