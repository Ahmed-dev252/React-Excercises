
import { useState } from "react"



const App = () => {

  const [count, setCount] = useState(0)
  
 
  const handlDecrease = () => {

    if (count > 0) { 
      
      setCount( count - 1)

    }
  }

  
  const handleIncrease = () => {
    setCount(count + 1)
  }

  return(

    <div>
      <h1>Count: {count} </h1>
      <button onClick={ handlDecrease} disabled={count === 0}  >Decrese</button>
      <button onClick={handleIncrease}> Increase</button>
    </div>

  )
}




export default App;