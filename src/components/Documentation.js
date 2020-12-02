import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';

function Documentation() {
    return(
      <div className='container'>
        <Layout />
        <hr/>

        <h3>Numbers</h3>
        <p className='specificP'>Every numbers has factors. For example the factors of the number
          12 are the numbers 1, 2, 3, 4, 6 and 12. All numbers can be produced by prime numbers.
          <br/><br/>This option will give the prime factors of a number (with output of a prime
          number with amount of it's power), check if it is a prime number or not, and will
          give the primes up to a number.
        </p>
        <p>API Link: <span className='specificSpan'>{"https://prime-numbers-api-server.herokuapp.com/prime?pCheck=<number>"}</span></p>
        <Link to="/primes">Link to " Number " Page</Link><br/><br/>
        <hr/>

        <h3>Prime Check</h3>
        <p className='specificP'>If a number has two factors, itself and 1, then it
          is a prime number.<br/><br/>This option will check if a number is prime number or not.
        </p>
        <p>API Link: <span className='specificSpan'>{"https://prime-numbers-api-server.herokuapp.com/primeCheck?pCheck=<number>"}</span></p>
        <Link to="/primeCheck">Link to " Prime Check " Page</Link><br/><br/>
        <hr/>

        <h3>Numbers and Factors</h3>
        <p className='specificP'>If a number has two factors,
          itself and 1, then it is a prime number.<br/><br/>This option will give the prime factors
          of a number (with output of a prime number with amount of it's power).
        </p>
        <p>API Link: <span className='specificSpan'>{"https://prime-numbers-api-server.herokuapp.com/primeDivisions?pCheck=<number>"}</span></p>
        <Link to="/factors">Link to " Factors " Page</Link><br/><br/>
        <hr/>

        <h3>Primes to a Specific Number</h3>
        <p className='specificP'>Prime numbers are the numbers with two factors, itself and
          1.<br/><br/>This option will give all prime numbers from 1 to the number that has been
          entered.
        </p>
        <p>API Link: <span className='specificSpan'>{"https://prime-numbers-api-server.herokuapp.com/primes_to_a_number?pCheck=<number>"}</span></p>
        <Link to="/primes_to_a_number">Link to " Primes to a Number " Page</Link><br/><br/>
        <hr/>

        <h3>Primes In a Range</h3>
        <p className='specificP'>Prime numbers are the numbers with two factors, itself and
          1.<br/><br/>This option will give all prime numbers in a range.
        </p>
        <p>API Link: <span className='specificSpan'>{"https://prime-numbers-api-server.herokuapp.com/primes_in_bound?rangeS=<start>&rangeE=<end>"}</span></p>
        <Link to="/primes_in_range">Link to " Primes in a Range " Page</Link><br/><br/>
        <hr/>

        <h3>Sophie Prime</h3>
        <p className='specificP'>In number theory, a prime number p is a Sophie
          prime if 2p + 1 is also prime.  For example, 11 is a Sophie prime because
          2 × 11 + 1 = 23 is a prime number.<br/><br/>This option will check if a prime
          numbers is Sophie prime or not.
        </p>
        <p>API Link: <span className='specificSpan'>{"https://prime-numbers-api-server.herokuapp.com/primes_is_sophie?pCheck=<number>"}</span></p>
        <Link to="/primes_is_sophie">Link to " Sophie Prime " Page</Link><br/><br/>
        <hr/>

        <h3>Mersenne Prime</h3>
        <p className='specificP'>In mathematics, a Mersenne prime is a prime number
          that is one less than a power of two. That is, it is a prime number of the
          form M(p) = 2<sup>p</sup> − 1 for a prime number(p).<br/><br/>This option will check
          if a prime number is Mersenne or not.
        </p>
        <p>API Link: <span className='specificSpan'>{"https://prime-numbers-api-server.herokuapp.com/primes_is_mersenne?pCheck=<number>"}</span></p>
        <Link to="/primes_is_mersenne">Link to " Mersenne Prime " Page</Link><br/><br/>
        <hr/>

        <h3>Twin Prime</h3>
        <p className='specificP'>A twin prime is a prime number that is either 2 less
          or 2 more than another prime number—for example, either member of the twin
          prime pair (41, 43). In other words, a twin prime is a prime that has a prime
          gap of two. Sometimes the term twin prime is used for a pair of twin primes;
          an alternative name for this is prime twin or prime pair.<br/><br/>This option
          will check if a prime number is Twin or not.
        </p>
        <p>API Link: <span className='specificSpan'>{"https://prime-numbers-api-server.herokuapp.com/primes_has_twin?pCheck=<number>"}</span></p>
        <Link to="/primes_has_twin">Link to " Twin Prime " Page</Link><br/><br/>
        <hr/>

        <h3>Isolated Prime</h3>
        <p className='specificP'>An isolated prime (also known as single prime or
          non-twin prime) is a prime number p such that neither p − 2 nor p + 2 is prime.
          In other words, p is not part of a twin prime pair. For example, 23 is an
          isolated prime, since 21 and 25 are both composite.<br/><br/>This option
          will check if a prime number is Isolated or not.
        </p>
        <p>API Link: <span className='specificSpan'>{"https://prime-numbers-api-server.herokuapp.com/primes_is_isolated?pCheck=<number>"}</span></p>
        <Link to="/primes_is_isolated">Link to " Isolated Prime " Page</Link><br/><br/>
        <hr/>

      </div>
    )


}

export default Documentation;
