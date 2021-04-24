import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  return (
    <div>
      <nav class="navbar navbar-expand-lg nav-bg">
        <Link to="/home" class="navbar-brand">CookwithSam</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto pt-0">
            <li class="nav-item active">
              <Link to="/home" class="nav-link" href="#">Home <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
              <Link to="/dashboard" class="nav-link" href="#">Dashboard</Link>
            </li>
            <li class="nav-item">
              {
                loggedInUser.name ? <p class="nav-link text-white">{loggedInUser.name}</p> : <Link to="/login" class="nav-link">Login</Link>
              }

            </li>

          </ul>
        </div>
      </nav>

    </div>

  );
};

export default Header;
