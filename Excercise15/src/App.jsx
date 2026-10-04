import { useState } from 'react';
import UserContext from './UserContext';
import ThemedComponent from './LanguageComponent';


const App = () => {
    const [theme, setTheme] = useState('english');


     const toggleLanguage = () => {
    setTheme((prevTheme) => (prevTheme === 'english' ? 'spanish' : 'english'));
  };



  return (
    
    <UserContext.Provider value={{ theme, setTheme }}  >
      
      <button onClick={toggleLanguage}>    SwitchLanguage To {theme === 'english' ? 'spanish' : 'english'}     </button>

      



      <ThemedComponent />
       
    </UserContext.Provider>
  )
}

export default App