import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";

import "./list.scss";

const List = (props) => {
  const [shoppingList, setShoppingList] = useState([]);
  const shoppingListRef = useRef();
  const { list, deleteList, lists } = props;
  const deleteHandler = () => {
    deleteList(list.id);
    props.history.push("/");
  };
  const generateShoppingList = () => {
    let ingredients = [];
    list.recipes.map((recipe) => {
      ingredients.push(...recipe.ingredients);
    });

    setShoppingList(ingredients);
  };
  useEffect(() => {
    if (shoppingList.length > 0) {
      shoppingListRef.current.querySelector("li").focus();
    }
  }, [shoppingList]);
  return (
    <div className="list-container">
      <div className="list-nav">
        <h2 className="list-title">{list.title}</h2>
        <div className="list-btn-wrap">
          <button onClick={deleteHandler} className="list-btn">
            Delete List
          </button>
          {list.recipes.length > 0 && (
            <button onClick={generateShoppingList} className="list-btn">
              Generate shopping list
            </button>
          )}
        </div>
      </div>
      <div className="list-content">
        {list.recipes.length > 0 ? (
          <ul className="list-ul">
            {list.recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} lists={lists} />
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
