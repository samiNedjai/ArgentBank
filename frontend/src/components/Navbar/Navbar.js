import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/argentBankLogo.webp';

import { logoutUser } from '../../actions/post.user.action';
import { PostUserProfile } from '../../actions/post.userprofile.action';

import './navbar.css';

const Navbar = () => {
  const tokenLocalStorage = localStorage.getItem('token');
  const tokenSessionStorage = sessionStorage.getItem('token');
  const token = tokenLocalStorage || tokenSessionStorage;
  const userProfile = useSelector((state) => state.user.userProfile);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
    navigate('/');
  };

  useEffect(() => {
    dispatch(PostUserProfile());
  }, [dispatch]);


  if (token) {
    return (
      <nav className='main-nav'>
        <NavLink to='/' className='main-nav-logo'>
          <img src={logo} alt='Argent Bank Logo' className='main-nav-logo-image' />
          <h1 className='sr-only'>Argent Bank</h1>
        </NavLink>
        <div className='navbar_loginSuccess'>
          <NavLink to='/user-account' className='main-nav-item'>
            <i className='fa fa-user-circle'></i>
            {userProfile.userName}
          </NavLink>
          <NavLink to='/' className='main-nav-item' onClick={handleSignOut}>
            <i className='fa fa-sign-out'></i>
            Sign Out
          </NavLink>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className='main-nav'>
        <NavLink to='/' className='main-nav-logo'>
          <img src={logo} alt='Argent Bank Logo' className='main-nav-logo-image' />
          <h1 className='sr-only'>Argent Bank</h1>
        </NavLink>
        <div>
          <NavLink to='/login' className='main-nav-item'>
            <i className='fa fa-user-circle'></i>
            Sign In
          </NavLink>
        </div>
      </nav>
    );
  }
};

export default Navbar;
