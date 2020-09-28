import React, { useEffect, useState } from "react";
import useInput from "./hooks/input-hook";

const Ingredients = ({ getIngredients }) => {
  const [ingredients, setIngredients] = useState([]);
  const {
    value: ingredient,
    set: setIngredient,
    reset: resetIngredient,
  } = useInput("");
  const { value: qty, set: setQty, reset: reserQty } = useInput("");
  const { value: unit, set: setUnit, reset: resetUnit } = useInput("");

  const addIngredient = (e) => {
    e.preventDefault();
    setIngredients([
      ...ingredients,
      { name: ingredient, qty: qty, unit: unit },
    ]);
    resetIngredient();
    reserQty();
    resetUnit();
  };

  useEffect(() => {
    getIngredients(ingredients);
  });

  return (
    <form onSubmit={addIngredient}>
      <h2>Ingredients</h2>
      <label htmlFor="ingredient">
        Ingredient
        <br />
        <label>
          Name
          <input type="text" {...setIngredient} />
        </label>
        <label>
          Quantity
          <input type="text" {...setQty} />
        </label>
        <label>
          Unit
          <input type="text" {...setUnit} />
        </label>
        <button type="submit">Add</button>
      </label>
      {ingredients.map(({ name, qty, unit }) => (
        <p key={name}>{`${qty} ${unit} ${name}`}</p>
      ))}
    </form>
  );
};

export default Ingredients;
