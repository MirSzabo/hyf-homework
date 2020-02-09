import React from "react";
import TodoApp from "./components/TodoApp";
import Header from "./components/Header";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="todo-list">
      <Header />
      <Counter />
      <TodoApp />
    </div>
  );
}

export default App;
