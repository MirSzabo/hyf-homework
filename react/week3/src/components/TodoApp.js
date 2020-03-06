import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import uuid from "uuid/v4";

function TodoApp() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    (async () => {
      const info = await fetch(
        "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"
      ).then(data => data.json());
      setTodos(info);
    })();
  }, []);

  const addTodo = (newTodoText, newDeadline) => {
    const newTodos = [
      ...todos,
      {
        id: uuid(),
        description: newTodoText || "missing description",
        deadline: newDeadline || "no deadline",
        completed: false
      }
    ];
    setTodos(newTodos);
  };

  const removeTodo = todoId => {
    const updatedTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const toggleTodo = todoId => {
    const updatedTodos = todos.map(todo =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const editTodo = (todoId, newTask) => {
    const updatedTodos = todos.map(todo =>
      todo.id === todoId ? { ...todo, description: newTask } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <AddTodo addTodo={addTodo} /> 
        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
        />
    </div>
  );
}

export default TodoApp;
