import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { render } from "@testing-library/react";
import List from "../List";

test("should render a title", () => {
  const history = createMemoryHistory();
  const { container } = render(
    <Router history={history}>
      <List recipes={[]} title="Recipes" />
    </Router>
  );
  expect(container.textContent).toMatch("Recipes");
});
