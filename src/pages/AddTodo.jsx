import React, { useState } from 'react'

export default function AddTodo({ addTodo }) {
  const [newTodo, setNewTodo] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(newTodo)
    setNewTodo('')
  }

  return (
    <form onSubmit={handleSubmit} className="mt-5 flex">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
        placeholder="Add a new todo..."
      />
      <button
        type="submit"
        className="bg-cyan-500 text-white py-2 px-4 rounded-r-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50"
      >
        Add Todo
      </button>
    </form>
  )
}