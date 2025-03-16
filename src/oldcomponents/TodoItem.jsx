import React from "react";

function TodoItem({
  todo,
  index,
  editIndex,
  editText,
  handleDelete,
  handleEdit,
  handleEditChange,
  handleSave,
}) {
  return (
    <li>
      {editIndex === index ? (
        <>
          <input type="text" value={editText} onChange={handleEditChange} />
          <button onClick={() => handleSave(index, editText)}>SAVE</button>
        </>
      ) : (
        <>
          {todo}
          <button onClick={() => handleEdit(index)}>EDIT</button>
          <button onClick={() => handleDelete(index)}>DELETE</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
