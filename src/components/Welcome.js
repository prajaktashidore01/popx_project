import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="container-welcome">
      <h2>Welcome to PopX</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <button onClick={() => navigate('/create-account')} className="primary">Create Account</button>
      <button onClick={() => navigate('/signin')} className="secondary">Already Registered? Login</button>
    </div>
  );
};

export default Welcome;