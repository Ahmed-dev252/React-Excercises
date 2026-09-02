import { useState, useEffect } from 'react'



function App () {

  const [isRunning, setIsRunning] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [time, setTime] = useState(0);

  useEffect(() => {
    let timerId;
    if (isRunning && time) {
      timerId = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false); 
    }

   

     return () => clearInterval(timerId);

  }, [isRunning, time]);


   const handleStart = () => {
    if (inputValue > 0) {
      if (time === 0) {
        setTime(inputValue);
      }
      setIsRunning(true);
    }
  };

//  const handleStart = () => setIsRunning(true);

  const handleStop = () => setIsRunning(false);

  const handleReset = () => {
    setIsRunning(false);
   setTime(inputValue);
  };


  return (
    <div>
      <h1>Countdown Timer</h1>
      <p>Set Time (Seconds): <input type="number" value={inputValue} onChange={(e) => setInputValue(Number(e.target.value))} /></p>

      <p>Time Left: {time} (seconds)</p>
      <button  onClick={ handleStart} disabled={isRunning}>Start</button>

      <button onClick={handleStop}  disabled={!isRunning}>Stop</button>
      <button onClick={ handleReset}>Reset</button>
    </div>
  )
}

export default App;
