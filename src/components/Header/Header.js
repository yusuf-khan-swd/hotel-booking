import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/UserContext';
import { FaUserAlt } from 'react-icons/fa';

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
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl">Hotel Booking</Link>
      </div>
      <div>
        <Link to='/home' className='mr-5 link-hover'>Home</Link>
      </div>
      {
        user?.uid ?
          <button onClick={handleLogOut} className=" mr-5 link-hover btn btn-sm">Logout</button>
          :
          <div className="form-control">
            <div>
              <Link to='/login' className='mr-5 link-hover'>Login</Link>
              <Link to='/register' className='mr-5 link-hover'>Register</Link>
            </div>
          </div>
      }
      <div className="flex-none gap-2">

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="rounded-full">
              {
                user?.photoURL ?
                  <img src={user?.photoURL} alt="profile" />
                  :
                  <>
                    <FaUserAlt className='text-3xl'></FaUserAlt>
                  </>
              }
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <span className="justify-between">
                {user?.displayName ? user?.displayName : 'Profile'}
                <span className="badge">New</span>
              </span>
            </li>
            <li><span>Settings</span></li>
            <li><span onClick={handleLogOut}>Logout</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;