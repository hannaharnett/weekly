import React from "react";
import AddToListDropdown from "./AddToListDropdown";

const Recipe = (props) => {
  const { id, title, ingredients, servings } = props.recipe;
  const handleDelete = () => {
    props.deleteRecipe(id);
  };

  const handleClick = (e) => {
    props.addToList(e.currentTarget.dataset.id, props.recipe);
  };
  return (
    <div className="recipe-container">
      <h2>{title}</h2>
      <p>Servings: {servings}</p>
      <ul>
        {ingredients.map(({ name, qty, unit }) => (
          <li key={name}>{`${qty} ${unit} ${name}`}</li>
        ))}
      </ul>

      <button onClick={handleDelete}>Delete</button>

      <AddToListDropdown
        activatorText="Add to list"
        items={props.lists}
        onClick={handleClick}
      />
    </div>
  );
};

export default Recipe;
