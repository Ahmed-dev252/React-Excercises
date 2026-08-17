import UserCard from './UserCard'

function App() {

  const user = [
    { name: "Geedi", Email: "geedi@gmail.com" },
    { name: "Faarah", Email: "faarah@gamai.com" },
    { name: "Jaamac", Email: "jaamac@gmail.com" },
  ]


  return (
    <>
    
      <UserCard user={user[0].name} Email={user[0].Email} />
      <UserCard user={user[1].name} Email={user[1].Email} />
      <UserCard user={user[2].name} Email={user[2].Email} />

    </>
  )
}

export default App;