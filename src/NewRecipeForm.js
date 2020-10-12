import React, { useState } from "react";
import { Link } from "react-router-dom";
import useInput from "./hooks/input-hook";
import Ingredients from "./Ingredients";
import PageHeader from "./PageHeader";

import "./newRecipeForm.scss";

const NewRecipeForm = (props) => {
  const [ingredients, setIngredients] = useState([]);
  const { value: title, set: setTitle, reset: resetTitle } = useInput("");
  const { value: servings, set: setServings, reset: resetServings } = useInput(
    ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      id: title.toLowerCase().replace(/ /g, "-"),
      title: title,
      servings: servings,
      ingredients: ingredients,
    };

    props.saveRecipe(newRecipe);
    resetTitle();
    resetServings();
    props.history.push("/recipes");
  };
  return (
    <div className="new-recipe-container">
      <PageHeader>
        <h2 className="page-header-title">Add Recipe</h2>
        <div className="btn-wrap">
          <Link to="/recipes">
            <button className="list-btn">Cancel</button>
          </Link>
          <button onClick={handleSubmit} className="list-btn">
            Add recipe
          </button>
        </div>
      </PageHeader>
      <div className="new-recipe-content">
        <div className="new-recipe-form">
          <form onSubmit={handleSubmit}>
            <br />
            <label>
              Recipe name
              <br />
              <input type="text" {...setTitle} />
            </label>
            <br />
            <label>
              Servings
              <br />
              <input type="number" value="2" {...setServings} />
            </label>
          </form>
          <Ingredients
            getIngredients={(ingredients) => setIngredients(ingredients)}
          />
        </div>
      </div>
    </div>
  );
};

export default NewRecipeForm;
