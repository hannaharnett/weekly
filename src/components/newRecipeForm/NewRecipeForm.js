import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useInput from "../../hooks/useInput";
import Ingredients from "../ingredients/Ingredients";
import PageHeader from "../pageHeader/PageHeader";
import { v4 as uuidv4 } from "uuid";

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
      id: uuidv4(),
      title: title,
      servings: servings,
      ingredients: ingredients,
    };

    props.saveRecipe(newRecipe);
    resetTitle();
    resetServings();
    props.history.push("/recipes");
  };

  useEffect(() => {
    document.querySelector("input").focus();
  }, []);

  return (
    <div className="new-recipe-container">
      <PageHeader>
        <h2 className="page-header-title">Add Recipe</h2>
        <div className="btn-wrap">
          <Link to="/recipes">
            <button className="page-header-btn">Cancel</button>
          </Link>
          <button onClick={handleSubmit} className="page-header-btn">
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
