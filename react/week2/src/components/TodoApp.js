import React, { useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import initialTodos from "./TodosData";
import uuid from "uuid/v4";

function TodoApp() {
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
    <div>
      <AddTodo addTodo={addTodo} />
      <TodoList 
        todos={todos} 
        removeTodo={removeTodo} 
        toggleTodo={toggleTodo} />
    </div>
  );
}

export default TodoApp;
