import React, { useState } from 'react';
import { FaTruckFast } from "react-icons/fa6";
import { LuUserRound } from "react-icons/lu";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { TbCurrencyNaira } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import './nav.css';

const Navigate = ({ searchbtn }) => {
  const [search, setSearch] = useState('');
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <>
      <div className='free'>
        <div className='icon'>
          <FaTruckFast />
        </div>
        <p>FREE shipping when shopping for items less than <TbCurrencyNaira />10000</p>
      </div>
      <div className='main_header'>
        <div className='container'>
          <div className='logo'>
            <img src='./img/one.png' alt='logo' />
            <p>CAMPUS CONNECT.</p>
          </div>
          
          <div className='search_box'>
            <input
              type='text'
              value={search}
              placeholder='Enter Product Category'
              autoComplete='off'
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={() => searchbtn(search)}>Search</button>
          </div>
          <div className='icon'>
            {isAuthenticated && (
              <div className='account'>
                <div className='user_icon'>
                  <LuUserRound />
                </div>
                <p>Hello, {user.name}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='header'>
        <div className='container'>
          <div className='nav'>
            <ul>
              <li>
                <Link to='/' className='link'>Home</Link>
              </li>
              <li>
                <Link to='/product' className='link'>Products</Link>
              </li>
              <li>
                <Link to='/cart' className='link'>Cart</Link>
              </li>
              <li>
                <Link to='/contact' className='link'>Contact</Link>
              </li>
            </ul>
          </div>
          <div className='auth'>
            {isAuthenticated ? (
              <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                <FiLogOut />
              </button>
            ) : (
              <button onClick={() => loginWithRedirect()}>
                <FiLogIn />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigate;
