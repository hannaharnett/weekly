import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "./PageHeader";

import "./lists.scss";

const Lists = ({ lists }) => {
  const miniLists = lists.map((list) => {
    return (
      <li key="list.id">
        <Link to={`/list/${list.id}`}>
          <h2 className="list-title">{list.title}</h2>
        </Link>
        <p>{`Incudes ${list.recipes.length} recipes`}</p>
      </li>
    );
  });
  return (
    <div className="all-lists-container">
      <PageHeader>
        <h1 className="page-header-title">All lists</h1>
        <div className="btn-wrap">
          <Link to="/list/new">
            <button className="list-btn">New List</button>
          </Link>
          <Link to="/recipe/new">
            <button className="list-btn">New Recipe</button>
          </Link>
        </div>
      </PageHeader>
      <ul className="all-lists-ul">{miniLists}</ul>
    </div>
  );
};

export default Lists;
