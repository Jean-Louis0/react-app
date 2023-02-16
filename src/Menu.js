import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Menu.css";
function Menu() {
    return (
        <div className='navbar'>
            <ul className='navbar-links'>
                <NavLink className={"navbar-link"} to='/'>
                    <li className='nav-item'>Accueil</li>
                </NavLink>
                <NavLink className={"navbar-link"} to='/Galerie'>
                    <li className='nav-item'>Galerie</li>
                </NavLink>
                <NavLink className={"navbar-link"} to='/portfolio'>
                    <li className='nav-item'>Portfolio</li>
                </NavLink>
                <NavLink className={"navbar-link"} to='/Services'>
                    <li className='nav-item'>Services</li>
                </NavLink>
                <NavLink className={"navbar-link"} to='/Contact'>
                    <li className='nav-item'>Contact</li>
                </NavLink>
            </ul>
        </div>
    );
}

export default Menu;