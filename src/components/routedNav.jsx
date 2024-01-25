import React from 'react';
import { Link } from 'react-router-dom';

const Navi = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link className='' to="/">Home</Link>
        </li>
        <li>
          <Link to="/apis">APIs</Link>
        </li>
        <li>
          <Link to="/download">Download</Link>
        </li>
        <li>
          <Link to="/insights">Insights</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navi;
