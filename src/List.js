import React from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";

const List = (props) => {
  const { list, deleteList, lists } = props;
  const deleteHandler = () => {
    deleteList(list.id);
    props.history.push("/");
  };
  return (
    <div>
      <h1>{list.title}</h1>
      <button onClick={deleteHandler}>Delete List</button>
      {list.recipes.length > 0 ? (
        list.recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} lists={lists} />
        ))
      ) : (
        <div>
          <h2>No recipes yet!</h2>
          <Link to="/recipes">Browse recipes</Link>
        </div>
      )}
    </div>
  );
};

export default List;
