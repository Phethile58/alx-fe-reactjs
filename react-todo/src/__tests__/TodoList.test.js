import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Learn Jest")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a new todo");
    const button = screen.getByText("Add Todo");

    fireEvent.change(input, { target: { value: "Write tests" } });
    fireEvent.click(button);

    expect(screen.getByText("Write tests")).toBeInTheDocument();
  });

  test("does not add an empty todo", () => {
    render(<TodoList />);
    const button = screen.getByText("Add Todo");

    fireEvent.click(button); // Attempt to add empty todo
    expect(screen.queryByText("")).not.toBeInTheDocument();
  });

  test("toggles a todo's completion status", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");

    fireEvent.click(todo); // Mark as completed
    expect(todo).toHaveStyle("text-decoration: line-through");

    fireEvent.click(todo); // Mark as not completed
    expect(todo).not.toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText("Delete")[0];
    const todo = screen.getByText("Learn React");

    fireEvent.click(deleteButton); // Delete the first todo
    expect(todo).not.toBeInTheDocument();
  });
});

