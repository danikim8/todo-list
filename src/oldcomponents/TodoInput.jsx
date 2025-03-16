import React, { useState } from "react";

function TodoInput({ handleAdd }) { 
  const [input, setInput] = useState(""); // 입력값 상태

  // 입력값 변경 핸들러
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // 추가 버튼 클릭 시 실행되는 함수
  const onSubmit = () => {
    if (input.trim() === "") return; // 빈 입력 방지
    handleAdd(input);
    setInput(""); // 입력창 초기화
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="이것은 입력창"
      />
      <button onClick={onSubmit}>ADD</button>
    </div>
  );
}

export default TodoInput;
