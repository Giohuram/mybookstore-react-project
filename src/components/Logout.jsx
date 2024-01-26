import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const Logout = () => {
  const { logOut } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logOut();
      // Sign-out successful.
      alert('Sign-out successful');
    } catch (error) {
      // Handle any sign-out errors here.
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <div className='h-screen bg-teal-100 flex items-center justify-center'>
      <button className='bg-red-700 px-4 py-2 text-white rounded' onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
