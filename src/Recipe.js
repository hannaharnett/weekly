import React, { useRef } from "react";
import AddToListDropdown from "./AddToListDropdown";
import PageHeader from "./PageHeader";
import Modal from "./Modal";
import useModal from "./hooks/useModal";

import "./recipe.scss";

const Recipe = (props) => {
  const { show, toggle } = useModal();
  const openModalRef = useRef();
  const { recipe, lists } = props.location.state;
  const { id, title, ingredients, servings } = recipe;

  const handleDelete = () => {
    props.deleteRecipe(id);

    props.history.push("/recipes");
  };

  const returnFocusModalClose = () => {
    toggle();
    openModalRef.current.focus();
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
          <button
            className="page-header-btn"
            onClick={toggle}
            ref={openModalRef}
          >
            Delete Recipe
          </button>
        </div>

        <Modal show={show} hide={returnFocusModalClose}>
          <h2>Are you sure you want to delete this recipe?</h2>
          <div className="modal-btns">
            <button onClick={handleDelete}>Delete Recipe</button>
            <button onClick={returnFocusModalClose}>Cancel</button>
          </div>
        </Modal>
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
