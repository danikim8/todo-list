import React, {useState} from "react";

function NewTodoForm({handleAdd}) {
  const [input, setInput] = useState("");

  //입력값 변경
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  //추가 버튼 클릭시 실행
  const handleClickAdd = () => {
    if (input.trim() === "") return;
    handleAdd(input); //부모app으로 전달
    setInput(""); //입력창 초기화
  };

  return (
    <div className="flex w-full max-w-md">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Type right here!"
        className="w-full px-4 py-2 border border-gray-300 rounded-l-lg outline-none focus:border-blue-800"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition"
        onClick={handleClickAdd}
      >
        ADD
      </button>
    </div>
  );
}

export default NewTodoForm;
