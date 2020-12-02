import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';

function History() {

  return(

    <div className='container'>
    <Layout />
    <hr/>

    <h3>History</h3>
      <p className='specificP'><img src="../images/Rhind_Mathematical_Papyrus.jpg"
           style={{maxWidth:'325px',width:'100%',padding:'5px'}}
           className="historyImg"/>
      The Rhind Mathematical Papyrus, from around 1550 BC, has Egyptian fraction
      expansions of different forms for prime and composite numbers.
      However, the earliest surviving records of the
      explicit study of prime numbers come from ancient Greek mathematics. Euclid's
      Elements (c. 300 BC) proves the infinitude of primes and the fundamental
      theorem of arithmetic, and shows how to construct a perfect number from a
      Mersenne prime. Another Greek invention, the Sieve of Eratosthenes, is
      still used to construct lists of primes.<br/><br/>
      Around 1000 AD, the Islamic mathematician Ibn al-Haytham (Alhazen) found
      Wilson's theorem, characterizing the prime numbers as the numbers n
      that evenly divide {"(n-1)!+1"}. He also
      conjectured that all even perfect numbers come from Euclid's construction using
      Mersenne primes, but was unable to prove it.
      Another Islamic mathematician, Ibn al-Banna' al-Marrakushi, observed that
      the sieve of Eratosthenes can be sped up by testing only the divisors up to
      the square root of the largest number to be tested. Fibonacci brought the
      innovations from Islamic mathematics back to Europe. His book Liber Abaci
      (1202) was the first to describe trial division for testing primality, again
      using divisors only up to the square root.<br/><br/>
      In 1640 Pierre de Fermat stated (without proof) Fermat's little theorem
      (later proved by Leibniz and Euler). Fermat also investigated the primality
      of the Fermat numbers 2<sup>2<sup>n</sup></sup>+1, and Marin Mersenne studied
      the Mersenne primes, prime numbers of the form 2<sup>p</sup>-1 with p itself a prime.
      Christian Goldbach formulated Goldbach's conjecture, that every even number is the sum
      of two primes, in a 1742 letter to Euler. Euler proved Alhazen's conjecture
      (now the Euclid–Euler theorem) that all even perfect numbers can be
      constructed from Mersenne primes. He introduced methods from mathematical
      analysis to this area in his proofs of the infinitude of the primes and
      the divergence of the sum of the reciprocals of the primes 1/<sub>2</sub> +
      1/<sub>3</sub> + 1/<sub>5</sub> + 1/<sub>7</sub> + 1/<sub>11</sub>+ ... .
      At the start of the 19th century, Legendre and Gauss conjectured that as
      x tends to infinity, the number of primes up to x is asymptotic to x/<sub>log(x)</sub>,
      where log(x) is the natural logarithm of x. Ideas of Bernhard Riemann in his
      1859 paper on the zeta-function sketched an outline for proving this.
      Although the closely related Riemann hypothesis remains unproven, Riemann's
      outline was completed in 1896 by Hadamard and de la Vallée Poussin, and the
      result is now known as the prime number theorem.<br/><br/>
      Since 1951 all the largest known primes have been found using these tests on computers.
      The search for ever larger primes has generated interest outside mathematical
      circles, through the Great Internet Mersenne Prime Search and other distributed
      computing projects. The idea that prime numbers had few applications outside of
      pure mathematics was shattered in the 1970s when public-key cryptography and the RSA
      cryptosystem were invented, using prime numbers as their basis.
      </p>

      <em> Source: <a href="https://en.wikipedia.org/wiki/Prime_number"
                      target="_blank"
                      style={{color:'rgba(0,0,255,0.6)'}}> Wikipedia
                   </a>
      </em>
    </div>
  )
}
export default History;
