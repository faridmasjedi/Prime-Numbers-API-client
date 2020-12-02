import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {

  return(
    <div className="nav">
      <header>
        <nav>
          <div>
            <p>|&nbsp;<Link to="/primes">Numbers</Link></p>
            <p>|&nbsp;<Link to="/primeCheck">Prime Check</Link></p>
            <p>|&nbsp;<Link to="/factors">Factors</Link></p>
            <p>|&nbsp;<Link to="/primes_to_a_number">Primes to a number</Link></p>
            <p>|&nbsp;<Link to="/primes_in_range">Primes in a range</Link></p>
            <p>|&nbsp;<Link to="/primes_is_sophie">Sophie Prime</Link></p>
            <p>|&nbsp;<Link to="/primes_is_mersenne">Mersenne Prime</Link></p>
            <p>|&nbsp;<Link to="/primes_has_twin">Twin Prime</Link></p>
            <p>|&nbsp;<Link to="/primes_is_isolated">Isolated Prime</Link></p>
          </div>
        </nav>
      </header>
    </div>
  );

};

export default Nav;
