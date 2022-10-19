import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {
  const { user } = useContext(AuthContext);
  console.log(user)
  return (
    <div>
      <h2>This is Header for {user.email}</h2>
    </div>
  );
};

export default Header;