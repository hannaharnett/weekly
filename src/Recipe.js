import React from "react";

const Recipe = (props) => {
  const { id, title, ingredients, servings } = props.recipe;
  const handleDelete = () => {
    props.deleteRecipe(id);
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
    </div>
  );
};

export default Recipe;
