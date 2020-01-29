import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

class Header extends React.Component {
  render() {
    return <h1>Todo List</h1>;
  }
}

class TodoItem extends React.Component {
  render() {
    const { description, deadline } = this.props;
    return (
      <li>
        {description} {deadline}
      </li>
    );
  }
}

class TodoList extends React.Component {
  render() {
    const { todos } = this.props;
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
}

class App extends React.Component {
  render() {
    return (
      <div className="todo-list">
        <Header />
        <TodoList todos={todos}/>
      </div>
    );
  }
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
