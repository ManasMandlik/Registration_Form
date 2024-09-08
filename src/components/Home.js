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
      <button onClick={handlelogin}> Login </button>
    </div>
  );
}

export default Home;
