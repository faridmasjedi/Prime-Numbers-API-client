import React from 'react';
import { Link } from 'react-router-dom';

function Layout() {

  return(
    <div className="layout">
      <header>
        <h1> Prime Numbers API </h1>
        <nav>
          <div>
            <Link to="/">Home</Link> |&nbsp;
            <Link to="/history">History</Link> |&nbsp;
            <Link to="/documentation">Documentation</Link> |&nbsp;
            <Link to="/prime_pattern">Prime Pattern</Link> |&nbsp;
          </div>
        </nav>
      </header>
    </div>
  );

};

export default Layout;
