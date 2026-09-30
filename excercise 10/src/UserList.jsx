const UserList = ({ users }) => {
  return (
    <div align="center" >
      <h2>User List</h2>
      {users.length > 0 ? (
        <table border="9"align="center" >
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>

            {users.map((user, id) => (

              <tr key={id}>

                <td>{user.name}</td>

                <td>({user.email})</td>

              </tr>

            ))}
          </tbody>

        </table>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default UserList;
