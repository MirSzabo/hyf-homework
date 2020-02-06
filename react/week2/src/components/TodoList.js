import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, removeTodo, toggleTodo }) {
  const list = todos.map(todo => {
    return (
      <TodoItem
        key={todo.id}
        id={todo.id}
        description={todo.description}
        completed={todo.completed}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
      />
    );
  });

  if (list.length === 0) {
    return (
      <div>
      <ul>No items</ul>
    </div>
    );
  }

  return (
    <div>
      <ul>{list}</ul>
    </div>
  );
}

export default TodoList;
