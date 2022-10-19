import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success('logout successfully');
      })
      .catch(error => {
        console.error('error: ', error)
        toast.error("Logout Fail");
      })
  };

  return (
    <div>
      <Link to="/"><h2>This is Header for {user?.email}</h2></Link>
      {
        user && user.uid ?
          <button onClick={handleLogOut}>Sign Out</button>
          :
          <Link to='/login'>Sign In</Link>
      }
    </div>
  );
};

export default Header;