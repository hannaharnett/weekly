import React, { useEffect, useState, useRef } from "react";
import useInput from "./hooks/input-hook";
import { v4 as uuidv4 } from "uuid";

const Ingredients = ({ getIngredients }) => {
  const [ingredients, setIngredients] = useState([]);
  const {
    value: ingredient,
    set: setIngredient,
    reset: resetIngredient,
  } = useInput("");
  const { value: qty, set: setQty, reset: reserQty } = useInput("");
  const { value: unit, set: setUnit, reset: resetUnit } = useInput("");
  const formRef = useRef();

  const addIngredient = (e) => {
    e.preventDefault();
    setIngredients([
      ...ingredients,
      { name: ingredient, qty: qty, unit: unit, id: uuidv4() },
    ]);
    resetIngredient();
    reserQty();
    resetUnit();

    formRef.current.querySelector("input").focus();
  };

  const removeIngredient = (id) => {
    const newList = ingredients.filter((item) => item.id !== id);

    setIngredients(newList);
    formRef.current.querySelector("input").focus();
  };

  useEffect(() => {
    getIngredients(ingredients);
  });

  return (
    <div className="ing-container">
      <form onSubmit={addIngredient} ref={formRef} id="add-ing-info">
        <label className="visually-hidden" htmlFor="add-ing-info">
          Add ingredient information
        </label>
        <br />
        <label className="ing-label">
          Name of ingredient
          <br /> <input type="text" {...setIngredient} />
        </label>
        <br />
        <label className="ing-label">
          Quantity
          <br />
          <input type="text" {...setQty} />
        </label>
        <br />
        <label className="ing-label">
          Unit
          <br />
          <input type="text" {...setUnit} />
        </label>
        <br />
        <label className="visually-hidden" htmlFor="add-ing-btn">
          Add ingredient to recipe
        </label>
        <br />
        <button id="add-ing-btn" type="submit">
          +
        </button>
      </form>
      <div className="ing-list">
        <h4>Ingredients:</h4>
        {ingredients.map(({ name, qty, unit, id }) => (
          <p key={name}>
            <label htmlFor="remove-ing" className="visually-hidden">
              {`Remove ${name} from ingredient list`}
            </label>
            <button id="remove-ing" onClick={() => removeIngredient(id)}>
              -
            </button>
            {`${qty} ${unit} ${name}`}{" "}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Ingredients;
