import { useReducer } from "react";

const initialState = { count1: 0,  count2: 0, };

const reducer = (state, action) => {
  switch (action.type) {
    case "increaseA":
      return { ...state, count1: state.count1 + 1 };
    case "decreaseA":
      return { ...state, count1: state.count1 - 1 }

    case "increaseB":
      return { ...state, count2: state.count2 + 1 };
    case "decreaseB":
      return state.count2 > 0 ? { ...state, count2: state.count2 - 1 } : state;
    case "resetAll":
      return initialState;
    default:
      return state;
  }
};







const DoubleCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Double Counter</h1>

      <h2>Counter A:{state.count1} </h2>
      <button onClick={() => dispatch({ type: "decreaseA" })} disabled={state.count1 === 0} >-A</button>
      <button onClick={() => dispatch({ type: "increaseA" })} >+A</button>

      <h2>Counter B:{state.count2} </h2>
      <button  onClick={() => dispatch({ type: "decreaseB" })} disabled={state.count2 === 0} >-B</button>
      <button onClick={() => dispatch({ type: "increaseB" })} >+B</button>
      
        <div> 
            <button onClick={() => dispatch({ type: "resetAll" })} >Reset bouth</button> 
        </div>
      
    </div>
  );
};

export default DoubleCounter;
