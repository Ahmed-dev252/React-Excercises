import { useState, useEffect } from 'react'


const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

 

   useEffect(() => {
    if (error) {
      console.error('Error fetching GitHub user:', error);
    }
  }, [error]);

   const handleSearch = async () => {
    if (!searchTerm) return;

    setLoading(true);
    setError('');
    setUserData(null);

    try {
    
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = await fetch(
        `https://api.github.com/users/${searchTerm.toLowerCase()}`
      );

      if (!response.ok) {
        throw new Error('GitHub user not found');
      }

      const data = await response.json();
      setUserData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <h1>GitGub User Search</h1>

      <input
        type="text"
        placeholder="Enter GitHub username..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}


       {userData && (
        <div >
          <h3>{userData.name || userData.login}</h3>
          
          <img
            src={userData.avatar_url}
            alt={userData.login}
            width="100"
            style={{ borderRadius: '50%' }}
          />

          <p>Location: {userData.location || 'N/A'}</p>
          <p>Public Repos: {userData.public_repos}</p>
          <p>followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
        </div>
      )}

     
      
    </>
  )
}

export default App;
