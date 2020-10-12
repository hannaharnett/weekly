import React from "react";
import { Link } from "react-router-dom";
import AddToListDropdown from "./AddToListDropdown";

import "./recipeCard.scss";

const RecipeCard = (props) => {
  const { title, id } = props.recipe;
  const addHandler = (e) => {
    props.addMethod(e.currentTarget.dataset.id, props.recipe);
  };
  return (
    <li className="recipe-card col-sm-12-12 col-md-6-12 col-lg-4-12 col-xl-3-12">
      <Link
        to={{
          pathname: `/recipe/${id}`,
          state: {
            recipe: props.recipe,
            lists: props.lists,
          },
        }}
      >
        <h2 className="recipe-title">{title}</h2>
      </Link>
      <AddToListDropdown items={props.lists} onClick={addHandler} />
    </li>
  );
};

export default RecipeCard;
