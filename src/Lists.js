import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "./PageHeader";

import "./lists.scss";

const Lists = ({ lists }) => {
  const miniLists = lists.map((list) => {
    return (
      <li key={list.id}>
        <Link to={`/list/${list.id}`}>{list.title}</Link>
        <p>{`Incudes ${list.recipes.length} recipes`}</p>
      </li>
    );
  });
  return (
    <div className="all-lists-container">
      <PageHeader>
        <h1 className="page-header-title">All lists</h1>
        <div className="btn-wrap">
          <Link to="/list/new" className="page-header-btn">
            New List
          </Link>
          <Link to="/recipe/new" className="page-header-btn">
            New Recipe
          </Link>
        </div>
      </PageHeader>
      <ul className="all-lists-ul">{miniLists}</ul>
    </div>
  );
};

export default Lists;
