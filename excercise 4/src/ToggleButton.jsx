
import {useState} from 'react'



function ToggleButton (){

        const [Name, setName] = useState(false)

        const handleChange = (event) => {
            setName(!Name)
        }
    return (
        <>
            <button onClick={handleChange} >  Turn {Name ? 'OFF' : 'ON'} </button>
            
             <p>The button is {Name ? 'OFF' : 'ON'}</p>
        </>
    )
}

export default ToggleButton;