import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2>This is Header for {user.displayName}</h2>
    </div>
  );
};

export default Header;