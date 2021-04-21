import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/profile">profile</Link>
      </li>
    </ul>
    <nav>
      Navigation
    </nav>
  </>
);

export default Navigation;
