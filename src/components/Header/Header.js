import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert('logout successfully');
      })
      .catch(error => {
        console.error('error: ', error)
        alert(error.message);
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