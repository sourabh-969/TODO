import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList({
  todos,
  addTodo,
  toggleTodo,
  deleteTodo,
  editTodo,
}) {
  const [newTodo, setNewTodo] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <div className="mx-4 my-10">
      <form onSubmit={handleSubmit} className="my-10 flex gap-2">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder:font-mono"
          placeholder="Enter a ToDo..."
        />
        <button
          type="submit"
          className="bg-cyan-500 text-white py-2 px-4 rounded-r-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50"
        >
          Add
        </button>
      </form>

      <ul className="mt-8 space-y-4 border-2 border-gray-200 rounded-md p-4 text-white">
        <span className="font-doto text-xl">Task</span>
        {todos.map((todo, index) => (
          <ToDoItem
            key={index}
            todo={todo}
            index={index}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </ul>
    </div>
  );
}
