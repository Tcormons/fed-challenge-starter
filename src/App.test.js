import React from "react";
import { render } from "@testing-library/react";

import { ThemeProvider } from "@material-ui/core";
import App from "./App";

test("renders App with ThemeProvider", () => {
  const { container } = render(<App />);
  console.log({ container });
  // container.querySelector.toContainElement(<ThemeProvider />);
});
