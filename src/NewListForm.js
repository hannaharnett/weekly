import React, { useState } from "react";

const NewGroceryListForm = (props) => {
  const [title, setTitle] = useState("New List");
  const changeHandler = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const clickHandler = (e) => {
    e.preventDefault();
    const newList = {
      id: title.toLowerCase().replace(/ /g, "-"),
      title: title,
      recipes: [],
      created: new Date().toLocaleDateString(),
    };
    props.saveList(newList);
    props.history.push("/");
  };
  return (
    <div>
      <h1>New List</h1>
      <input type="text" value={title} onChange={changeHandler} />
      <button onClick={clickHandler}>Create</button>
    </div>
  );
};

export default NewGroceryListForm;
