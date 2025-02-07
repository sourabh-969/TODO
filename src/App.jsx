import React, { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./pages/ToDoList";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (text.trim() !== "") {
      setTodos([...todos, { id: todos.length, text, completed: false }]);
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo, index) =>
        index === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((_, index) => index !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo, index) =>
        index === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className="bg-black text-black  w-screen h-screen m-0 p-0">
      <Header />
      <ToDoList
        todos={todos}
        addTodo={addTodo}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
}
