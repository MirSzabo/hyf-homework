import React, { useState } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import initialTodos from "./components/TodosData";
import Counter from "./components/Counter";
import uuid from "uuid/v4";

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = newTodoText => {
    const newTodos = [
      ...todos,
      { id: uuid(), description: newTodoText || "random item", completed: false }
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

  return (
    <div className="todo-list">
      <Header />
      <Counter />
      <AddTodo addTodo={addTodo} />
      <TodoList 
        todos={todos} 
        removeTodo={removeTodo} 
        toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
