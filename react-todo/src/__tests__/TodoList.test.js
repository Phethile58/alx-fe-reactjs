// src/__tests__/TodoList.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build Todo App")).toBeInTheDocument();
  });

  test("can add a new todo", async () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Enter a new todo");
    const addButton = screen.getByText("Add");

    await userEvent.type(input, "Test new todo");
    await userEvent.click(addButton);

    expect(screen.getByText("Test new todo")).toBeInTheDocument();
  });

  test("can toggle todo completion", async () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");

    await userEvent.click(todoItem);

    // Inline style toggle check
    expect(todoItem).toHaveStyle("text-decoration: line-through");
  });

  test("can delete a todo", async () => {
    render(<TodoList />);
    const deleteButtons = screen.getAllByText("Delete");

    // Delete the first todo
    await userEvent.click(deleteButtons[0]);

    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});

