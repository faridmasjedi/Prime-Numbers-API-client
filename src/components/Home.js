import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';

function Home(){

  return(
    <div className="container">

      <Layout />
      <hr />

      <h3>What is a prime number? </h3>
      <p className='specificP'>A prime number (or a prime) is a natural number greater than 1 that is
        not a product of two smaller natural numbers. A natural number greater than
        1 that is not prime is called a composite number. For example, 5 is prime
        because the only ways of writing it as a product, 1 × 5 or 5 × 1, involve
        5 itself. However, 4 is composite because it is a product (2 × 2) in which
        both numbers are smaller than 4. Primes are central in number theory because
        of the fundamental theorem of arithmetic: every natural number greater than
        1 is either a prime itself or can be factorized as a product of primes that
        is unique up to their order.
      </p>
      <hr/>
      
      <div>
        <pre>
          <code>
            <xmp>
              <em style={{color:'rgba(0,0,255,0.6)'}}>Javascript</em><br/><br/>

              function isPrime(num)&#123;<br/>
              <span>{"  "}</span>if ( num===1 ) &#123; return 'Not-Prime';&#125; ;<br/>
              <span>{"  "}</span>let count =0;<br/>
              <span>{"  "}</span>for ( j=2; {"j < num; j++ "})&#123; <br />
              <span>{"    "}</span>if ( !(num % j) ) &#123; count++; &#125;<br />
              <span>{"    "}</span>if ( count ) &#123; return 'Not-Prime';&#125; <br />
              <span>{"  "}</span>&#125;<br />
              <span>{"  "}</span>return 'Prime';<br />
              &#125;<br/><br/>

              console.log(isPrime(1257079)) // Prime<br />
              console.log(isPrime(1257275)) // Not-Prime<br />
            </xmp>
          </code>
        </pre>
      </div>

    </div>
  )
}

export default Home;
