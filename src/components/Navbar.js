// src/components/Navbar.js
import React, { useState, useContext } from 'react';
import { MenuItems } from './MenuItems'; // Ensure this path is correct
import './Navbar.css'; // Ensure this path is correct
import { AuthContext } from '../context/AuthContext'; // Must match your folder structure
import { useNavigate, Link } from 'react-router-dom';

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  // 1) Destructure 'user' and 'dispatch' from the AuthContext
  const { user, dispatch } = useContext(AuthContext);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/login');
  };

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Travelo</h1>

      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} />
      </div>

      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <a className={item.Cname} href={item.url}>
              {item.icon && (
                <i className={item.icon} style={{ marginRight: '8px' }} />
              )}
              {item.title}
            </a>
          </li>
        ))}

        {/* If user is logged in, show username + logout; otherwise show login link */}
        {user ? (
          <>
            <li>
              <span className="nav-links">{user?.username || 'Logged In'}</span>
            </li>
            <li>
              <button className="nav-links" onClick={logout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link className="nav-links" to="/login">
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
