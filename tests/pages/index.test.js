import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home, { checkScroe } from "../../pages/index";

describe("checkScore", () => {
  it("checkScroe should return the expected 0-0 (Love - Love)", () => {
    render(<Home />);
    const num1input = screen.getByTestId("player1Score");
    const num2input = screen.getByTestId("player2Score");
    const resultArea = screen.getByTestId("result");
    fireEvent.change(num1input, { target: { value: 0 } });
    fireEvent.change(num2input, { target: { value: 0 } });
    expect(resultArea).toHaveTextContent("Love - Love");
  });

  it("checkScroe should return the expected 1-0 (Fifteen - Love)", () => {
    render(<Home />);
    const num1input = screen.getByTestId("player1Score");
    const num2input = screen.getByTestId("player2Score");
    const resultArea = screen.getByTestId("result");
    fireEvent.change(num1input, { target: { value: 1 } });
    fireEvent.change(num2input, { target: { value: 0 } });
    expect(resultArea).toHaveTextContent("Fifteen - Love");
  });

  it("checkScroe should return the expected 2-2 (Thirty - Thirty)", () => {
    render(<Home />);
    const num1input = screen.getByTestId("player1Score");
    const num2input = screen.getByTestId("player2Score");
    const resultArea = screen.getByTestId("result");
    fireEvent.change(num1input, { target: { value: 2 } });
    fireEvent.change(num2input, { target: { value: 2 } });
    expect(resultArea).toHaveTextContent("Thirty - Thirty");
  });

  it("checkScroe should return the expected 1-3 (Fifteen - Forty)", () => {
    render(<Home />);
    const num1input = screen.getByTestId("player1Score");
    const num2input = screen.getByTestId("player2Score");
    const resultArea = screen.getByTestId("result");
    fireEvent.change(num1input, { target: { value: 1 } });
    fireEvent.change(num2input, { target: { value: 3 } });
    expect(resultArea).toHaveTextContent("Fifteen - Forty");
  });

  it("checkScroe should return the expected 4-2 (Won for player1)", () => {
    render(<Home />);
    const num1input = screen.getByTestId("player1Score");
    const num2input = screen.getByTestId("player2Score");
    const resultArea = screen.getByTestId("result");
    fireEvent.change(num1input, { target: { value: 4 } });
    fireEvent.change(num2input, { target: { value: 2 } });
    expect(resultArea).toHaveTextContent("Won for player1");
  });

  it("checkScroe should return the expected 4-6 (Won for player2)", () => {
    render(<Home />);
    const num1input = screen.getByTestId("player1Score");
    const num2input = screen.getByTestId("player2Score");
    const resultArea = screen.getByTestId("result");
    fireEvent.change(num1input, { target: { value: 4 } });
    fireEvent.change(num2input, { target: { value: 6 } });
    expect(resultArea).toHaveTextContent("Won for player2");
  });

  it("checkScroe should return the expected 3-3 (Deuce)", () => {
    render(<Home />);
    const num1input = screen.getByTestId("player1Score");
    const num2input = screen.getByTestId("player2Score");
    const resultArea = screen.getByTestId("result");
    fireEvent.change(num1input, { target: { value: 3 } });
    fireEvent.change(num2input, { target: { value: 3 } });
    expect(resultArea).toHaveTextContent("Deuce");
  });

  it("checkScroe should return the expected 5-5 (Deuce)", () => {
    render(<Home />);
    const num1input = screen.getByTestId("player1Score");
    const num2input = screen.getByTestId("player2Score");
    const resultArea = screen.getByTestId("result");
    fireEvent.change(num1input, { target: { value: 5 } });
    fireEvent.change(num2input, { target: { value: 5 } });
    expect(resultArea).toHaveTextContent("Deuce");
  });

  it("checkScroe should return the expected 4-5 (Advantage for Player2)", () => {
    render(<Home />);
    const num1input = screen.getByTestId("player1Score");
    const num2input = screen.getByTestId("player2Score");
    const resultArea = screen.getByTestId("result");
    fireEvent.change(num1input, { target: { value: 4 } });
    fireEvent.change(num2input, { target: { value: 5 } });
    expect(resultArea).toHaveTextContent("Advantage for Player2");
  });

  it("checkScroe should return the expected 7-6 (Advantage for Player1)", () => {
    render(<Home />);
    const num1input = screen.getByTestId("player1Score");
    const num2input = screen.getByTestId("player2Score");
    const resultArea = screen.getByTestId("result");
    fireEvent.change(num1input, { target: { value: 7 } });
    fireEvent.change(num2input, { target: { value: 6 } });
    expect(resultArea).toHaveTextContent("Advantage for Player1");
  });
});
