import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles.css';

var active = {
    fontWeight: 'bold',
    color: '#001F5B'
}

const Header = () => (
    <div className="center">
        <br></br>
        <br></br>
        <img src="./logo.png" alt="nice" className="header-img"></img>
        <br></br>
        <ul className='nav-center'>
            <li><NavLink exact to='/' activeStyle={active} >About Us</NavLink></li>
            <li><NavLink to='/exec' activeStyle={active} >E-Board</NavLink></li>
            <li><NavLink to='/events' activeStyle={active} >Events</NavLink></li>
            <li><NavLink to='/comserve' activeStyle={active} >CommServe</NavLink></li>
            <li><NavLink to='/contact' activeStyle={active} >Contact</NavLink></li>
            <li><NavLink to='/sponsors' activeStyle={active} >Sponsors</NavLink></li>
            <a href="https://forms.gle/1wW6Ag3m8BWxw4Ed8" target="_blank" rel="noopener noreferrer" ><button className='button'>Sign Up!</button></a>
        </ul>
    </div>
)

export default Header;
