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
          <Link to="/recipe/new" className="page-header-btn">
            New Recipe
          </Link>
          <Link to="/list/new" className="page-header-btn">
            New List
          </Link>
        </div>
      </PageHeader>

      <ul className="recipe-list-ul">
        {recipes.map((recipe) => (
          <li
            className="col-sm-12-12 col-md-6-12 col-lg-4-12 col-xl-3-12"
            key={recipe.id}
          >
            <RecipeCard recipe={recipe} lists={lists} addMethod={addToList} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
