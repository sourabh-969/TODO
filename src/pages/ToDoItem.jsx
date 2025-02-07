import React, { useState } from "react";

export default function ToDoItem({
  todo,
  index,
  toggleTodo,
  deleteTodo,
  editTodo,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim() !== "") {
      editTodo(index, editText);
      setIsEditing(false);
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleEdit();
    } else if (e.key === "Escape") {
      setIsEditing(false);
      setEditText(todo.text);
    }
  };

  return (
    <li className="flex gap-3 items-center text-white bg-gray-100 bg-opacity-5  shadow-sm rounded-md p-4 transition-all ease-in-out">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(index)}
        className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-gray-300 rounded"
        aria-label={`Mark "${todo.text}" as ${
          todo.completed ? "not done" : "done"
        }`}
      />
      
      {isEditing ?  (
      <input
      type="text"
      value={editText}
      onChange={(e) => setEditText(e.target.value)}
      onKeyDown={handleKeyPress}
      className="ml-3 flex-1 px-2 py-1 border border-gray-300 text-black bg-slate-100 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
      autoFocus
    />
                                   )  : (
    <span
      className={`ml-3 flex-1 ${todo.completed ? "line-through text-gray-400" : "text-white"}`}>
        {todo.text}
    </span>
    ) }
              

      <button
        onClick={isEditing ? handleEdit : () => setIsEditing(!isEditing)}
        className="ml-2 text-cyan-500 hover:text-cyan-700 focus:outline-none"
        aria-label={`Edit "${todo.text}"`}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
      <button
        onClick={() => deleteTodo(index)}
        className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
        aria-label={`Delete "${todo.text}"`}
      >
        Delete
      </button>
    </li>
  );
}
