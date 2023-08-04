import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "./redux/actions";


const ToDoForm = () => {
 const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== '') {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };
  return (
    <div className="container mx-auto mt-4 bg-slate-400 text-black max-w-5xl px-7 py-8 rounded-md">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <form onSubmit={handleSubmit} className="flex mb-4">
        <input
          type="text"
          className="border rounded p-2 w-full mr-2"
          placeholder="Enter a new todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Add Todo
        </button>
      </form>
      <ul>
        {todos?.map(todo => (
          <li key={todo?.id} className="flex items-center mb-2 bg-slate-200 shadow-lg p-2 rounded-md">
            <input
              type="checkbox"
              className="mr-2"
              checked={todo?.completed}
              onChange={() => dispatch(toggleTodo(todo?.id))}
            />
            <span className={todo?.completed ? 'line-through' : ''}>{todo?.text}</span>
            <button
              className="ml-auto bg-red-500 text-white font-bold p-2 rounded-lg"
              onClick={() => dispatch(deleteTodo(todo?.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoForm;
