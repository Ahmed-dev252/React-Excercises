import React, { useContext } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

const App = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    
    <div className="font-sans   max-w-[1900px] mx-auto p-5  leading-relaxed ">
      <header className="flex justify-around items-end   border-b pb-4 mb-6">
        <h1 className="text-2xl font-bold  text-gray-800">React Blog</h1>
        <nav className="flex items-center  gap-4">
          <NavLink to="/" end className= "text-blue-600 no-underline px-4 py-2 rounded transition-colors duration-300 hover:bg-gray-100">Home</NavLink>
          {isAuthenticated ? (
            <>
              <NavLink to="/create" className= "text-blue-600 no-underline px-4 py-2 rounded transition-colors duration-300 hover:bg-gray-100" >Create Post</NavLink>
              <button onClick={logout}   className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors" >Logout</button>
            </>
          ) : (
            <NavLink to="/login" className= "text-blue-600 no-underline px-4 py-2 rounded transition-colors duration-300 hover:bg-gray-100" >Login</NavLink>
          )}
        </nav>
      </header>
      <main className="bg-white p-8 rounded-lg shadow-sm">
        <Outlet />
      </main>
    </div>
  );
};

export default App;