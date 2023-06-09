import React from "react";
import { useNavigate } from "react-router-dom";

import { logout } from '../helpers/logout';

import "./styles/Sidebar.scss";
import "./styles/Button.scss";

const Sidebar = (props) => {

  const navigate = useNavigate();

  const handleLogout = () => {
    logout(props.setCookieValue);
    navigate('/');
  };

  const path = window.location.pathname;
  
  return (
    <>
      <section className="sidebar fade-in-div">
        <div className="sidebar-title">My Account</div>
        <a href="/account" className={`sidebar-row link ${path === '/account' ? 'active' : ''}`}>Orders</a>
        <a href="/account/subscription" className={`sidebar-row link ${path === '/account/subscription' ? 'active' : ''}`}>Subscription</a>
        <a href="/account/address" className={`sidebar-row link ${path === '/account/address' ? 'active' : ''}`}>Update Address</a>
        <a href="/account/profile" className={`sidebar-row link ${path === '/account/profile' ? 'active' : ''}`}>Update Profile</a>
        <a href="#" onClick={handleLogout} className="sidebar-row link">Log Out</a>
    </section>
    </>
  )
}

export default Sidebar;
