import { useSearchParams } from 'react-router-dom';
import { useTodos } from '../store/Todos';

const Todos = () => {
  const { todos, toggleTodoCompleted, handleDeleteTodo } = useTodos();
  const [searchParams] = useSearchParams();
  
  let todosData = searchParams.get('todos');
  let filterData = todos;

  if (todosData === 'active') {
    filterData = filterData.filter((task) => !task.completed);
  }
  if (todosData === 'completed') {
    filterData = filterData.filter((task) => task.completed);
  }

  return (
    <ul className="space-y-3 mt-4">
      {filterData.map((todo) => {
        return (
          <li 
            key={todo.id} 
            className="flex items-center justify-between p-4 bg-white shadow rounded-lg border border-gray-100 transition-all hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id={`todo-${todo.id}`}
                checked={todo.completed}
                onChange={() => toggleTodoCompleted(todo.id)}
                className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label
                htmlFor={`todo-${todo.id}`}
                className={`text-lg font-medium ${
                  todo.completed ? 'line-through text-gray-400' : 'text-gray-800'
                }`}
              >
                {todo.task}
              </label>
            </div>
            
            {todo.completed && (
              <button
                type="button"
                onClick={() => handleDeleteTodo(todo.id)}
                className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition-colors"
              >
                Delete
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Todos;
