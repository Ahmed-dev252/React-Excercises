

import { useEffect, useState } from "react";

function App  () {
    
    const [Name, setName] = useState("");
    const [Greeting, setGreeting]= useState("Hello");

    useEffect(()=>{
        document.title= Greeting + Name ;

    });


    return (
      <div>
        <h2>Enter Your Name:</h2>
        <input 
        type="text" 
        value={Name}
        onChange={(e) => setName (e.target.value)} 
        />

        <h3>Choice a Greeting :</h3>
        <input 
        type="text" 
        value={Greeting} 
        onChange={(e) => setGreeting (e.target.value)} />
      </div>
    );
}

export default App;