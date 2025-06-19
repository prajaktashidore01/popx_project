import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const SignIn = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    setUser({ fullName: 'John Doe', email, password });
    navigate('/account');
  };

  return (
    <div className="container-signin">
      <h2>Signin to your <br></br>PopX account</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <div className='input-group'>
        <label htmlFor="phone">
            Email Address<span className='required'>*</span></label>
            <input className='input-signin' type="email" placeholder="Enter email address" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className='input-group'>
        <label htmlFor="phone">
            Password<span className='required'>*</span></label>
           <input className='input-signin'type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      
      
      <button onClick={handleLogin} className="primary">Login</button>
    </div>
  );
};

export default SignIn;