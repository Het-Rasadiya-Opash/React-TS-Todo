import { useState, type FormEvent } from 'react';
import { useTodos } from '../store/Todos'; 

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const { handleAddToDo } = useTodos();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todo.trim()) return; 
    handleAddToDo(todo);
    setTodo("");
  };

  return (
    <form 
      onSubmit={handleFormSubmit} 
      className="flex gap-2 p-4 bg-white shadow-md rounded-lg"
    >
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new task..."
        className="grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button 
        type="submit" 
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
