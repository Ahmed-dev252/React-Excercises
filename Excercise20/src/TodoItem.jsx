import { useContext } from "react";
import TodoContext from "./TodoContext";

const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);

  return (
    <div cursor-pointer className="flex gap-2 items-center justify-between border-b border-gray-400 p-1">
     
       <input 
          type="checkbox" 
          checked={todo.completed}
         onClick={() => dispatch({ type: 'toggle', payload: todo.id })}
        />


      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
          color: todo.completed ? 'gray' : 'black',
        }}
        onClick={() => dispatch({ type: "toggle", payload: todo.id })}
      >
        {todo.text}
      </span>
      <button cursorp="true" className="text-red-500 font-semibold  text-sm px-2 m-1 rounded" onClick={() => dispatch({ type: "delete", payload: todo.id })}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
