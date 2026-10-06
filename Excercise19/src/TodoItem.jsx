import { useContext } from 'react';
import TodoContext from './TodoContext';
import { useState } from 'react';

const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);
  const [isChecked, setIsChecked] = useState(todo.completed);

  return (
    
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', gap: '10px' }}>

     
    
       <input 
          type="checkbox" 
          checked={isChecked} 
         onClick={() => dispatch({ type: 'toggle', payload: todo.id })}
        />

      <span
        style={{
          fontSize: '15px',
          textDecoration: todo.completed ? 'line-through' : 'none',
          color: todo.completed ? 'gray' : 'black',
          cursor: 'pointer',
        }}
        onClick={() => dispatch({ type: 'toggle', payload: todo.id })}
      >
        {todo.text}
      </span>
      <button onClick={() => dispatch({ type: 'delete', payload: todo.id })}>
        Delete
      </button>
         </div>
  );
};

export default TodoItem;
