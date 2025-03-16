import React, {useState} from "react";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  //입력값 변경
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  //할일 추가
  const handleAdd = () => {
    if (input.trim() === "") return;

    setTodos((prevTodos) => [...prevTodos, input]);
    setInput(""); // 입력창 초기화
  };
  //할일 삭제
  const handleDelete = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };
  //할일 수정모드 활성화화
  const handleEdit = (index) => {
    setEditIndex(index);
    setEditText(todos[index] || "");
  };
  //수정중인 입력값 변경
  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };
  //수정 저장
  const handleSave = (index) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo, i) => (i === index ? editText : todo));
    });
    setEditIndex(null); //수정모드해제
  };

  return (
    <>
      <h1>Dani Todo-list</h1>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="이것은 입력창"
      />

      <button onClick={handleAdd}>ADD</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={handleEditChange}
                />
                <button onClick={() => handleSave(index)}>SAVE</button>
              </>
            ) : (
              <>
                {todo}
                <button onClick={() => handleEdit(index)}>EDIT</button>
                <button onClick={() => handleDelete(index)}>DELETE</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
