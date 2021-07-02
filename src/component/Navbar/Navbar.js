import React, { useContext } from 'react';
import './Navbar.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { UserContext } from '../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        
        <div className="nav-main-div">
            <h2>Mambo Books</h2>
            <nav>
                <ul>
                    <li>
                    <Link to="/home" style={{ textDecoration: 'none' }}>Home</Link>
                    </li>
                    <li>
                    <Link to="/orders" style={{ textDecoration: 'none' }}>Orders</Link>
                    </li>
                    <li>
                    <Link to="/admin" style={{ textDecoration: 'none' }}>Admin</Link>
                    </li>
                    <li>
                    <Link to="/deals" style={{ textDecoration: 'none' }}>Deals</Link>
                    </li>
                    {!loggedInUser.email && <li id="login-btn">
                    <Link id="login-color" to="/login" style={{ textDecoration: 'none' }}>Login</Link>
                    </li>}
                    {loggedInUser.email && <li>{loggedInUser.email}</li>
                    }
                   
                    
                    
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;