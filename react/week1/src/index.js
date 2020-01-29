import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

function Header () {
  return <h1>Todo List</h1>;
}

function TodoItem (props) {
  const { description, deadline } = props;
  return (
    <li>
      {description} {deadline}
    </li>
  );
}

function TodoList (props) {
    const { todos } = props;
    return (
      <ul>
        {todos.map(todo => {
          return (
            <TodoItem
              key={todo.description}
              description={todo.description}
              deadline={todo.deadline}
            />
          );
        })}
      </ul>
    );
}

function App () {
    return (
      <div className="todo-list">
        <Header />
        <TodoList todos={todos} />
      </div>
    );
}

const todos = [
  {
    description: "Get out of bed",
    deadline: "Wed Sep 13 2017"
  },
  {
    description: "Brush teeth",
    deadline: "Thu Sep 14 2017"
  },
  {
    description: "Eat breakfast",
    deadline: "Fri Sep 15 2017"
  }
];

ReactDOM.render(<App />, document.getElementById("root"));
