import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
const Navbar = () =>{
    return <nav className ={s.nav}> 
      <div className={s.item}>
      <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
      </div>
      <div className={s.item}>
      <NavLink to="/dialogs">Messages</NavLink>
      </div>
      <div className={s.item}>
      <NavLink to="/News">News</NavLink>
      </div>
      <div className={s.item}>
      <NavLink to="/users">Users</NavLink>
      </div>
      <div className={s.item}>
      <a href="/Music">Music</a>
      </div>
      <div>
        
      </div>
      <div className={s.item}>
      <a href="/Settings">Settings</a>
      </div>
  </nav>
}
export default Navbar;