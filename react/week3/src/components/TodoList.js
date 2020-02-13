import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, removeTodo, editTodo, toggleTodo }) {
  const Modal = props => {
    return <div className="border">{props.children}</div>;
  };

  const list = todos.map(todo => {
    return (
      <Modal key={todo.id}>
        <TodoItem
          key={todo.id}
          id={todo.id}
          description={todo.description}
          deadline={todo.deadline}
          completed={todo.completed}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
        />
      </Modal>
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
