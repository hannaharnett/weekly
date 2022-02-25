import React from "react";
import { render, screen } from "@testing-library/react";
import Ingredients from "../Ingredients";

test("ingredients renders name, quantity, unit", () => {
  render(<Ingredients />);

  expect(screen.getByLabelText(/name/i)).toBeDefined();
  expect(screen.getByLabelText(/quantity/i)).toBeDefined();
  expect(screen.getByLabelText(/unit/i)).toBeDefined();
});
