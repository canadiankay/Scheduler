import React from "react";

import { render, cleanup, fireEvent } from "@testing-library/react";

import Button from "components/Button";

afterEach(cleanup);

// These tests will confirm that the following is true:


it("renders without crashing", () => {
  render(<Button />);
});

// a button can render
it("renders its `children` prop as text", () => {
  const { getByText } = render(<Button>Default</Button>);
  expect(getByText("Default")).toBeInTheDocument();
});

//button renders with the default style
it("renders a default button style", () => {
  const { getByText } = render(<Button>Default</Button>);
  expect(getByText("Default")).toHaveClass("button");
});

//button renders with the "confirm" style when the confirm prop is true
it("renders a confirm button", () => {
  const { getByText } = render(<Button confirm>Confirm</Button>);
  expect(getByText("Confirm")).toHaveClass("button--confirm");
});

//button renders with the "danger" style when the danger prop is true
it("renders a danger button", () => {
  const { getByText } = render(<Button danger>Danger</Button>);
  expect(getByText("Danger")).toHaveClass("button--danger");
});

// button can trigger an onClick prop with the button event handler
it("renders a clickable button", () => {
  const handleClick = jest.fn();
  const { getByText } = render(
    <Button onClick={handleClick}>Clickable</Button>
  );

  const button = getByText("Clickable");

  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1);
});

//button does not trigger onClick prop when the disabled prop is true
it("renders a disabled button", () => {
  const handleClick = jest.fn();
  const { getByText } = render(
    <Button disabled onClick={handleClick}>
      Disabled
    </Button>
  );

  const button = getByText("Disabled");

  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(0);
});
