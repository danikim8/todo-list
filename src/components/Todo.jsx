import React, {useState} from "react";

function Todo({todo, index, updateTodo, deleteTodo}) {
  const [content, setContent] = useState(todo);
  const [isEditMode, setIsEditMode] = useState(false);

  //삭제 클릭시
  const handleClickDelete = () => {
    deleteTodo(index);
  };
  //수정 클릭시
  const handleClickEdit = () => {
    setIsEditMode(true);
  };
  //수정취소 클릭시
  const handleClickCancelEditing = () => {
    setIsEditMode(false);
    setContent(todo); //기존값으로 되돌리기
  };
  //수정완료 클릭시
  const handleClickSaveEditing = () => {
    updateTodo(index, content);
    setIsEditMode(false);
  };
  //입력값 변경 헨들러
  const handleChangeInput = (e) => {
    setContent(e.target.value);
  };

  return (
    <li className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
      {isEditMode ? (
        <div className="flex w-full">
          <input
            type="text"
            value={content}
            onChange={handleChangeInput}
            className="flex-grow px-2 py-1 border border-gray-300 rounded-l-lg focus:outline-none"
          />
          <button
            className="bg-red-400 text-white px-3 py-1 rounded-r-lg hover:bg-red-500"
            onClick={handleClickCancelEditing}
          >
            CANCEL
          </button>
          <button
            className="ml-2 bg-blue-400 text-white px-3 py-1 rounded hover:bg-blue-500"
            onClick={handleClickSaveEditing}
          >
            SAVE
          </button>
        </div>
      ) : (
        <>
          <span className="text-gray-700">{todo}</span>
          <div className="flex gap-2">
            <button
              onClick={handleClickEdit}
              className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
            >
              EDIT
            </button>
            <button
              className="bg-red-400 text-white px-3 py-1 rounded hover:bg-red-500"
              onClick={handleClickDelete}
            >
              DELETE
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default Todo;
