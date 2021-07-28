import React from "react";
import "./Nav.css";
import {Link} from 'react-router-dom';


function Nav() {
    const navStyle={
        color:'white',
        textDecoration:'none'
    }
	return (
		<nav>
            <Link to='/' style={navStyle}>
			<h3 className='nav-header'>
				<span>CovidTracker</span>
               
			</h3>
            </Link>
			<ul className='nav-links'>
                <Link to='/Info' style={navStyle}>
				<li>Info</li>
                </Link>
			</ul>
		</nav>
	);
}
export default Nav;
