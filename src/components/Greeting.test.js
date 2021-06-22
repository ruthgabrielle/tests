import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("renders Hello World as a text", () => {
    //Arrange
    render(<Greeting />);

    //Act
    // ... nothing

    //Assert
    const helloWorldElement = screen.getByText("hello, world", {
      exact: false,
    });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders the text when the button wasn't clicked", () => {
    //arrange
    render(<Greeting />);

    //act
    // .. nothing

    //assert
    const initalStateElement = screen.getByText("It's lovely to see you", {
      exact: false,
    });
    expect(initalStateElement).toBeInTheDocument();
  });

  test("renders the text after button clicked", () => {
    //arrange
    render(<Greeting />);

    //act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //assert
    const changedStateElement = screen.getByText("Changed");
    expect(changedStateElement).toBeInTheDocument;
  });

  test("does not render the first 'lovely to see u' if the button was clicked", () => {
    const outputElemet = screen.queryByText('lovely to see you', { exact: false });
    expect(outputElemet).toBeNull;
  })
});