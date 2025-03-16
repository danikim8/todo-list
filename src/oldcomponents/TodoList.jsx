import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, editIndex, handleDelete, handleEdit, handleSave }) {
  return (
    <ul>
      {todos.map((todo, index) => {
        <TodoItem
          todo={todo}
          key={index}
          index={index}
          editIndex={editIndex}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleSave={handleSave}
        ></TodoItem>;
      })}
    </ul>
  );
}

export default TodoList;
