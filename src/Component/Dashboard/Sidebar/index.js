import React from 'react';
import { Link } from 'react-router-dom';
const Sidebar = ({ menu, logout }) => (
  <div>
    {Object.keys(menu).map((item, i) => {
        return (
          <Link to={ '/' + menu[item].url } key={i}>
            <i className={menu[item] ? `${menu[item].icon}` : ''}></i> {menu[item].name}
          </Link>
        );
      })}
      
  </div>
);

export default Sidebar;