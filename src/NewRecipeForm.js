import React, { useState } from "react";
import { Link } from "react-router-dom";
import useInput from "./hooks/input-hook";
import Ingredients from "./Ingredients";

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
    props.history.push("/");
  };
  return (
    <div>
      <Link to="/">Cancel</Link>
      <h2>Add Recipe</h2>
      <form onSubmit={handleSubmit}>
        <br />
        <label>
          Recipe name
          <input type="text" {...setTitle} />
        </label>
        <br />
        <label htmlFor="servings">
          Servings
          <input type="number" value="2" {...setServings} />
        </label>
        <br />
        <button type="submit">Add recipe</button>
      </form>
      <Ingredients
        getIngredients={(ingredients) => setIngredients(ingredients)}
      />
    </div>
  );
};

export default NewRecipeForm;
