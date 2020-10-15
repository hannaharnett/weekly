import React from "react";
import AddToListDropdown from "./AddToListDropdown";
import PageHeader from "./PageHeader";

import "./recipe.scss";

const Recipe = (props) => {
  const { recipe, lists } = props.location.state;
  const { id, title, ingredients, servings } = recipe;

  const handleDelete = () => {
    props.deleteRecipe(id);

    props.history.push("/recipes");
  };

  const handleAdd = (e) => {
    props.addToList(e.currentTarget.dataset.id, recipe);
  };
  return (
    <div className="recipe-container">
      <PageHeader>
        <div className="title-wrap">
          <h2 className="page-header-title">{title}</h2>
          <AddToListDropdown items={lists} onClick={handleAdd} />
        </div>
        <div className="btn-wrap">
          <button className="page-header-btn" onClick={handleDelete}>
            Delete Recipe
          </button>
        </div>
      </PageHeader>
      <div className="recipe-content">
        <p>Servings: {servings}</p>
        <ul className="recipe-ul">
          {ingredients.map(({ name, qty, unit }) => (
            <li key={name}>{`${qty} ${unit} ${name}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recipe;
