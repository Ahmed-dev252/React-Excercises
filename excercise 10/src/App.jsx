import UserList from "./UserList";

const App = () => {
  
  const users = [
    {
      name: "faarah", email: "faarah@gmail.com",
    },
    
    {
      name: "geedi", email: "geedi@gmail.com",
    },
    {
      name: "hamuuda", email: "hamuuda@gmail.com",
    },
    
    {
      name: "mohamed", email: "mohamed@gmail.com",
    },
    {
      name: "yuusuf", email: "yuusuf@gmail.com",
    },
    
  
  ];

  return (
    <div>
      <UserList users={users} />
    </div>
  );
};

export default App;
