import React from "react";
import { Link } from "react-router-dom";

import "./lists.scss";

const Lists = ({ lists }) => {
  const miniLists = lists.map((list) => {
    return (
      <li className="">
        <Link to={`/list/${list.id}`}>
          <h2 className="list-title">{list.title}</h2>
        </Link>
        <p>{`Incudes ${list.recipes.length} recipes`}</p>
      </li>
    );
  });
  return (
    <div className="all-lists-container">
      <h1 className="all-lists-title visually-hidden">All lists</h1>
      <ul className="all-lists-ul">{miniLists}</ul>
    </div>
  );
};

export default Lists;
