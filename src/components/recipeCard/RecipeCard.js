import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../dropdown/Dropdown";
import Modal from "../modal/Modal";
import useModal from "../../hooks/useModal";

import "./recipeCard.scss";

const RecipeCard = (props) => {
  const { show, toggle } = useModal();
  const { title, id } = props.recipe;

  const addHandler = (e) => {
    props.addMethod(e.currentTarget.dataset.id, props.recipe);
    toggle();
  };

  useEffect(() => {
    if (show) {
      const timeout = setTimeout(() => toggle(), 2000);
      return () => clearTimeout(timeout);
    }
  }, [show]);

  return (
    <div className="recipe-card">
      <Link
        to={{
          pathname: `/recipe/${id}`,
          state: {
            recipe: props.recipe,
            lists: props.lists,
          },
        }}
      >
        <h2 className="recipe-title">{title}</h2>
      </Link>
      <Dropdown items={props.lists} onClick={addHandler} />
      <Modal show={show} hide={toggle}>
        <h2>Added {title}!</h2>
      </Modal>
    </div>
  );
};

export default RecipeCard;
