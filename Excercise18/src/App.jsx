import { useReducer, useState } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import { initialState } from './ContactReducer';
import { ContactReducer } from './ContactReducer';


const App = () => {
  const [state, dispatch] = useReducer(ContactReducer, initialState);
  const [editingContact, setEditingContact] = useState(null);
  
  
  return (
    <div>
    <h2>Contact Management</h2>

    <ContactForm
      dispatch={dispatch}
      editingContact={editingContact}
      setEditingContact={setEditingContact}
    />
    <ContactList
      contacts={state}
      dispatch={dispatch}
      setEditingContact={setEditingContact}
    />
  </div>
  );
};

export default App;
