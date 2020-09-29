import React from "react";
import AddToListDropdown from "./AddToListDropdown";

const RecipeCard = (props) => {
  const { title, id } = props.recipe;
  const addHandler = (e) => {
    props.addMethod(e.currentTarget.dataset.id, props.recipe);
  };
  return (
    <div>
      <h1>{title}</h1>
      <AddToListDropdown
        activatorText="Add to list"
        items={props.lists}
        onClick={addHandler}
      />
      {props.deleteMethod && (
        <button onClick={props.deleteMethod} data-id={id}>
          Delete
        </button>
      )}
    </div>
  );
};

export default RecipeCard;
