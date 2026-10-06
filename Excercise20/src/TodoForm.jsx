import { useState, useContext } from 'react';
import TodoContext from './TodoContext';

const TodoForm = () => {
  const [text, setText] = useState('');
  const { dispatch } = useContext(TodoContext);

  const handleAdd = () => {
    if (text.trim()) {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false,
      };
      dispatch({ type: 'add', payload: newTodo });
      setText('');
    }
  };

  return (
    <div className='  mt-2 flex gap-3 justify-center items-center'>
      <input
      className='gap-2 border border-gray-400 rounded py-1 px-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-300'
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button className='bg-violet-800 pl-6 pr-6 pb-2 pt-2    text-white rounded ' onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoForm;