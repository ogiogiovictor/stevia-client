import React from 'react';
import { NavLink } from 'react-router-dom';
const Sidebar = ({ menu, logout }) => (
  <div>
    {menu ? Object.keys(menu).map((item, i) => {
      return (
        <NavLink to={'/' + menu[item].url} activeClassName='active' key={i}>
          <i className={menu[item] ? `${menu[item].icon}` : 'Loading'}></i>{' '}
          {menu[item].name}
        </NavLink>
      );
    }) : ''}
  </div>
);

export default Sidebar;
