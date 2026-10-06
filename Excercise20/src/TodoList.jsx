import { useContext } from 'react';
import TodoContext from './TodoContext';
import TodoItem from './TodoItem';
import { useState } from 'react';

const TodoList = () => {
  const { state } = useContext(TodoContext);

  return (
      <div> 
         
      {state.map((todo) => (
          

        <TodoItem key={todo.id} todo={todo} />
      ))}
     </div>
  );
};

export default TodoList;