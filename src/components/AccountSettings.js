import React from 'react';
import { useUser } from '../context/UserContext';

const AccountSettings = () => {
  const { user } = useUser();

  if (!user) return <p>No user logged in.</p>;

  return (
    <div className="container">
        <div className='acct'>
            <h2>Account Settings</h2>
        </div>
      
      <div className="profile">
        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Profile Picture" className='avatar'/>
        <div>
          <h3>{user.fullName}</h3>
          <p>{user.email}</p>
          <p>{'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam'}</p>
        </div>
      </div>
      <div className='outer-container'>
        <div class="dashed">
        
  </div>
      </div>
     
    </div>
  );
};

export default AccountSettings;