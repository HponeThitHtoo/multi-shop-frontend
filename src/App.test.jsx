import { render, screen } from "@testing-library/react";

import App from "./App";
import { expect, test } from "vitest";

test("Should render App", () => {
  render(<App />);
  const headingElement = screen.getByRole("heading", { name: /react/i });
  expect(headingElement).not.toBeNull();
});
