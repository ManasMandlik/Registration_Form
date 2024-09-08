import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const handlelogin = () =>{
      navigate('/Login')
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handlelogin}> Login </button>
    </div>
  );
}

export default Home;
