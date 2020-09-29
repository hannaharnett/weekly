import React from "react";
import { Link } from "react-router-dom";

const Dashboard = (props) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/recipe/new">New Recipe</Link>
      <br />
      <Link to="/lists/new">New Grocery List</Link>
      <br />
      {props.lists.map((list) => (
        <h3>
          <Link key={list.id} to={`/lists/${list.id}`}>
            {list.title} - {list.recipes.length}
          </Link>
          <br />
        </h3>
      ))}
    </div>
  );
};

export default Dashboard;
