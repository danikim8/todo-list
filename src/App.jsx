import React, {useState} from "react";
import NewTodoForm from "./components/NewTodoForm";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);

  //할일 추가 -----이건여기나두는이우???
  const handleAdd = (input) => {
    if (input.trim() === "") return;

    setTodos((prevTodos) => [...prevTodos, input]);
  };
  //할일 삭제
  const handleDelete = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };
  //수정 저장
  const handleSave = (index, newText) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo, i) => (i === index ? newText : todo));
    });
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen py-10">
      <h1 className="text-3xl font-bold text-gray-700 mb-5">Dani Todo-list</h1>
      <NewTodoForm handleAdd={handleAdd} />

      <ul className="mt-6 w-full max-w-md space-y-4">
        {todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              todo={todo}
              index={index}
              updateTodo={handleSave}
              deleteTodo={handleDelete}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
