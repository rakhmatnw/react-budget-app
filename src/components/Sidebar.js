import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <ul className="nav nav-pills flex-column ">
      <li className="nav-item">
        <NavLink exact className="nav-link" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/budget">Budget</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/income">Income</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/spending">Spending</NavLink>
      </li>
    </ul>
  )
}
