// MainNav.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MainNav() {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/signin');
  };

  return (
    <div className="header">
      <h1>CineHaven</h1>
      <button className='btn' onClick={handleSignInClick}>Sign in</button>
    </div>
  );
}
