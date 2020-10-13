import React, { useState } from "react";
import PageHeader from "./PageHeader";
import { v4 as uuidv4 } from "uuid";

import "./newListForm.scss";

const NewGroceryListForm = (props) => {
  const [title, setTitle] = useState("");
  const changeHandler = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const clickHandler = (e) => {
    e.preventDefault();
    const newList = {
      id: uuidv4(),
      title: title,
      recipes: [],
      created: new Date().toLocaleDateString(),
    };
    props.saveList(newList);
    props.history.push("/lists");
  };
  return (
    <div className="new-list-container">
      <PageHeader>
        <h1 className="page-header-title">New List</h1>
      </PageHeader>
      <div className="new-list-content">
        <form onSubmit={clickHandler}>
          <label>
            Name of new list
            <br />
            <input type="text" value={title} onChange={changeHandler} />
          </label>

          <button onClick={clickHandler}>+</button>
        </form>
      </div>
    </div>
  );
};

export default NewGroceryListForm;
