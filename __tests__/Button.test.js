import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../src/app/components/Button.jsx";

test("checks the functionality of button", async () => {
  let src;
  const testSetCat = () => {
    src = "testurl";
  };

  render(<Button setCat={testSetCat} />);

  await userEvent.click(screen.getByRole("button"));

  expect(src).toBe("testurl");
});
