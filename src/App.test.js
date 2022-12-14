import { render, screen, fireEvent } from "@testing-library/react";
import App, { replaceCamelWithSpaces } from "./App";

//////// REACT TESTING LIBRARY //////////////////
// render components into virtual Dom
// searching virtual dom
// interacting with virtual dom
// needs a test runner

// JEST
// recommended by testing library
// watch mode

// types of tests
// unit tests
// test one unit of code in isolation
// integration tests
// how multiple test units work together
//functional tests
// tests a particular function of software && it tests a behaviour
// acceptance / E2E tests
// use actual browser and server (cypress and selenium)

test("button changes color and is disabled when checkbox is clicked", () => {
  render(<App />);
  // find an el with a role of button and text of Change to blue
  const button = screen.getByRole("button", {
    name: `Change to Midnight Blue`,
  });
  const checkbox = screen.getByLabelText("Disable button");

  fireEvent.click(button);
  expect(button).toHaveStyle({
    backgroundColor: replaceCamelWithSpaces("MidnightBlue"),
  });

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});

test("initial conditions", () => {
  render(<App />);

  const button = screen.getByRole("button", "Change to Medium Violet Red");

  expect(button).toBeEnabled();
  expect(button).toHaveStyle({
    backgroundColor: replaceCamelWithSpaces("MediumVioletRed"),
  });
});

test("clicked disabled button has gray bg and reverts to blue", () => {
  render(<App />);

  const button = screen.getByRole("button", {
    name: `Change to Midnight Blue`,
  });
  const checkbox = screen.getByLabelText("Disable button");

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "gray" });
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({
    backgroundColor: replaceCamelWithSpaces("MediumVioletRed"),
  });
});

test("disabled button has gray bg and reverts to red", () => {
  render(<App />);

  const button = screen.getByRole("button");
  const checkbox = screen.getByLabelText("Disable button");

  fireEvent.click(button);
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "gray" });
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({
    backgroundColor: replaceCamelWithSpaces("MidnightBlue"),
  });
});

describe("spaces before camelCase capital letters", () => {
  test("works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });
  test("works for one inner capital letters", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
