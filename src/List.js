import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import PageHeader from "./PageHeader";
import Modal from "./Modal";
import useModal from "./hooks/useModal";

import "./list.scss";

const List = (props) => {
  const [shoppingList, setShoppingList] = useState([]);
  const { show, toggle } = useModal();

  const shoppingListRef = useRef();
  const openModalRef = useRef();

  const { list, deleteList, addToList, lists } = props;

  const deleteHandler = () => {
    deleteList(list.id);

    props.history.push("/lists");
  };

  const generateShoppingList = () => {
    let ingredients = [];
    list.recipes.map((recipe) => {
      return ingredients.push(...recipe.ingredients);
    });

    setShoppingList(ingredients);
  };

  const returnFocusModalClose = () => {
    toggle();
    openModalRef.current.focus();
  };

  useEffect(() => {
    if (shoppingList.length > 0) {
      shoppingListRef.current.querySelector("li").focus();
    }
  }, [shoppingList]);

  return (
    <div className="list-container">
      <PageHeader>
        <h2 className="page-header-title">{list.title}</h2>
        <div className="btn-wrap">
          <button onClick={toggle} className="list-btn" ref={openModalRef}>
            Delete List
          </button>
          {list.recipes.length > 0 && (
            <button onClick={generateShoppingList} className="list-btn">
              Generate shopping list
            </button>
          )}

          <Modal show={show} hide={returnFocusModalClose}>
            <h2>Are you sure you want to delete this list?</h2>
            <div className="modal-btns">
              <button onClick={deleteHandler} className="list-btn">
                Delete List
              </button>
              <button onClick={returnFocusModalClose} className="list-btn">
                Cancel
              </button>
            </div>
          </Modal>
        </div>
      </PageHeader>
      <div className="list-content">
        {list.recipes.length > 0 ? (
          <ul className="list-ul">
            {list.recipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                lists={lists}
                addMethod={addToList}
              />
            ))}
          </ul>
        ) : (
          <div className="no-recipes">
            <h2>No recipes yet!</h2>
            <Link to="/recipes">
              <button className="list-btn">Browse recipes</button>
            </Link>
            <Link to="/recipe/new">
              <button className="list-btn">Add new recipe</button>
            </Link>
          </div>
        )}
        {shoppingList.length > 0 && (
          <ul className="shopping-list-ul" ref={shoppingListRef}>
            <li className="shopping-list-title" tabIndex="-1">
              Shopping list:
            </li>
            {shoppingList.map(({ name, qty, unit }, index) => (
              <li key={index}>{`${qty} ${unit} ${name}`}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default List;
