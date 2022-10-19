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

  let showUser = "";

  if (!user?.displayName) {
    showUser = user?.email;
  }
  else {
    showUser = user?.displayName;
  }

  return (
    <div className="navbar bg-base-100 border-b-2">
      <div className="flex-1">
        <Link to='/' className="btn btn-ghost normal-case text-xl">Hotel Booking</Link>
      </div>

      <Link to='/home' className='btn btn-ghost normal-case text-xl border'>Home</Link>
      {
        showUser ?
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="">
                {showUser && showUser}
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li><Link>Settings</Link></li>
              <li><button onClick={handleLogOut}>Logout</button></li>
            </ul>
          </div>
          :
          <Link to='/login' className='btn btn-ghost normal-case text-xl border'>login</Link>
      }
    </div>
  );
};

export default Header;