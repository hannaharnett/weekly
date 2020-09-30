import React, { useState } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";

const List = (props) => {
  const [shoppingList, setShoppingList] = useState([]);
  const { list, deleteList, lists } = props;
  console.log(list);
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
  return (
    <div>
      <h2>{list.title}</h2>
      <button onClick={deleteHandler}>Delete List</button>
      {list.recipes.length > 0 ? (
        <div>
          {list.recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} lists={lists} />
          ))}
          <button onClick={generateShoppingList}>Generate shopping list</button>
        </div>
      ) : (
        <div>
          <h2>No recipes yet!</h2>
          <Link to="/recipes">Browse recipes</Link>
          <Link to="/recipe/new">Add new recipe</Link>
        </div>
      )}
      {shoppingList &&
        shoppingList.map(({ name, qty, unit }, index) => (
          <p key={index}>{`${qty} ${unit} ${name}`}</p>
        ))}
    </div>
  );
};

export default List;
