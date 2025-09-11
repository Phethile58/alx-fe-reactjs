import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";
import userEvent from "@testing-library/user-event";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build Todo App")).toBeInTheDocument();
  });

  test("can add a new todo", async () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Enter a new todo");
    const button = screen.getByText("Add");

    await userEvent.type(input, "Test new todo");
    fireEvent.click(button);

    expect(screen.getByText("Test new todo")).toBeInTheDocument();
  });

  test("can toggle todo completion", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");

    fireEvent.click(todoItem);

    // ✅ Matches your inline style from TodoList.jsx
    expect(todoItem).toHaveStyle("text-decoration: line-through");
  });

  test("can delete a todo", () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText("Delete")[0];
    fireEvent.click(deleteButton);

    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
