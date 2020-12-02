import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';

function PrimePattern() {
    return(
      <div className='container'>
        <Layout />
        <hr/>

        <br/>
        <p className='specificP'>There are infinitely many primes, as <a href="https://en.wikipedia.org/wiki/Euclid%27s_theorem" target="_blank">
          demonstrated by Euclid</a> around 300 BC. No known simple formula
          separates prime numbers from composite numbers.<br/><br/>
        </p>
        <h4>Algorithms</h4>
        <p className='specificP'>A simple but slow method of checking the primality
          of a given number n, called <a href="https://en.wikipedia.org/wiki/Trial_division" target="_blank">
          trial division</a>, n is a multiple of any
          integer between 2 and &#8730;n. Faster algorithms include the <a href="https://en.wikipedia.org/wiki/Miller%E2%80%93Rabin_primality_test" target="_blank">
          Miller–Rabin primality</a> test, which is fast but has a small chance
          of error, and the <a href="https://en.wikipedia.org/wiki/AKS_primality_test" target="_blank">
          AKS primality test</a>, which always produces the correct answer in polynomial
          time but is too slow to be practical. Particularly fast methods are available
          for numbers of special forms, such as <a href="https://en.wikipedia.org/wiki/Mersenne_prime" target="_blank">
          Mersenne numbers</a>.
        </p>
        <hr/>
        <h4>My Theory</h4>
        <p className='specificP'>The idea comes from looking at the difference between
        primes.
        </p>
        <pre>
          <code>
            2 <span className='diff'>+ 1</span> = 3 &rarr;
            3 <span className='diff'>+ 2</span> = 5 &rarr;
            5 <span className='diff'>+ 2</span> = 7 &rarr;
            7 <span className='diff'>+ 4</span> = 11 &rarr;
            11 <span className='diff'>+ 2</span> = 13 &rarr;
            13 <span className='diff'>+ 4</span> = 17 &rarr;
            17 <span className='diff'>+ 2</span> = 19 &rarr;
            19 <span className='diff'>+ 4</span> = 23 &rarr;
            23 <span className='diff'>+ 6</span> = 29 &rarr;
            29 <span className='diff'>+ 2</span> = 31 &rarr;
            31 <span className='diff'>+ 6</span> = 37 &rarr;
            37 <span className='diff'>+ 4</span> = 41 &rarr;
            41 <span className='diff'>+ 2</span> = 43 &rarr;
            43 <span className='diff'>+ 4</span> = 47 &rarr;
            47 <span className='diff'>+ 6</span> = 53 &rarr;
            53 <span className='diff'>+ 6</span> = 59 &rarr;
            59 <span className='diff'>+ 2</span> = 61 &rarr;
            61 <span className='diff'>+ 6</span> = 67 &rarr;
            67 <span className='diff'>+ 4</span> = 71 &rarr;
            71 <span className='diff'>+ 2</span> = 73 &rarr;
            73 <span className='diff'>+ 6</span> = 79 &rarr;
            79 <span className='diff'>+ 4</span> = 83 &rarr;
            83 <span className='diff'>+ 6</span> = 89 &rarr;
            89 <span className='diff'>+ 8</span> = 97 &rarr;
            ...
          </code>
        </pre>
        <p className='specificP'>If number 2 and 3 are put aside, there is an
          amazing relationship between the Primes up to number 23.At the first step,
          the Prime number added by two, and then the obtained number are added by four.
          When number 23 is obtained, the difference by the next Prime (29) is +6.
          From number 29 to 89, the differences are 2, 4 and 6, but without regularity. <br/><br/>
          The idea is to put aside 2 and 3, and now just follow the pattern. The pattern is
          to add +2 and then add +4 to the result and keep going. Lets name it ( +2,+4 )
          sequence.
        </p>
        <pre>
          <code>
          5 <span className='diff'>+ 2</span> = 7 &rarr;
          7 <span className='diff'>+ 4</span> = 11 &rarr;
          11 <span className='diff'>+ 2</span> = 13 &rarr;
          13 <span className='diff'>+ 4</span> = 17 &rarr;
          17 <span className='diff'>+ 2</span> = 19 &rarr;
          19 <span className='diff'>+ 4</span> = 23 &rarr;
          23 <span className='diff'>+ 2</span> = <span className='not-prime'>25</span> &rarr;
          25 <span className='diff'>+ 4</span> = 29 &rarr;
          29 <span className='diff'>+ 2</span> = 31 &rarr;
          31 <span className='diff'>+ 4</span> = <span className='not-prime'>35</span> &rarr;
          35 <span className='diff'>+ 2</span> = 37 &rarr;
          37 <span className='diff'>+ 4</span> = 41 &rarr;
          41 <span className='diff'>+ 2</span> = 43 &rarr;
          43 <span className='diff'>+ 4</span> = 47 &rarr;
          47 <span className='diff'>+ 2</span> = <span className='not-prime'>49</span> &rarr;
          49 <span className='diff'>+ 4</span> = 53 &rarr;
          53 <span className='diff'>+ 2</span> = <span className='not-prime'>55</span> &rarr;
          55 <span className='diff'>+ 4</span> = 59 &rarr;
          59 <span className='diff'>+ 2</span> = 61 &rarr;
          61 <span className='diff'>+ 4</span> = <span className='not-prime'>65</span> &rarr;
          65 <span className='diff'>+ 2</span> = 67 &rarr;
          67 <span className='diff'>+ 4</span> = 71 &rarr;
          71 <span className='diff'>+ 2</span> = 73 &rarr;
          73 <span className='diff'>+ 4</span> = <span className='not-prime'>77</span> &rarr;
          77 <span className='diff'>+ 2</span> = 79 &rarr;
          79 <span className='diff'>+ 4</span> = 83 &rarr;
          83 <span className='diff'>+ 2</span> = <span className='not-prime'>85</span> &rarr;
          85 <span className='diff'>+ 4</span> = 89 &rarr;
          89 <span className='diff'>+ 2</span> = <span className='not-prime'>91</span> &rarr;
          91 <span className='diff'>+ 4</span> = <span className='not-prime'>95</span> &rarr;
          95 <span className='diff'>+ 2</span> = 97 &rarr;
          ...
          </code>
        </pre>

        <p className='specificP'>
          The numbers colored in red are the irrelevant numbers. By that it means
          those are not Primes. As it is clear, surprisingly all the Primes are
          obtained. This sequence gives us all the primes but with some extra numbers
          that are not primes. <br/><br/>
          Lets talk about it and then we are gonna focus on the extra numbers which
          produced by this sequence. The first number of this sequence is 5 and then
          it will added by 2 and then the result, which is 7, will added by 4.
          Considering this sequence, we can say it is produced by the (6k + r) pattern.
          r is going to be 2 and 4. But it should be added by the first number,
          that is 5. Thus it can be mentioned that two patterns are there:
          (6k+2+5) and (6k+4+7).<br/><br/>
          Now, if we make the two patterns to be more simple, they are gonna be
          (6k+1) and (6k+5). (exp: 6k+11 = 6K+6+5 = 6(k+1)+5 and we can name k+1 to
          be another name or parameter. but we just kept it to be k ).<br/><br/>
          But is it true?! lets go deeper into this.
        </p>

        <pre>
          <code>
            6k + r : what are the residuals of numbers by dividing to 6?<br/>
            <hr/><br/>
            if r = 1 <span className='diff'>&rarr;</span> this is one of the patterns that we achived to.<br/><br/>
            if r = 2 <span className='diff'>&rarr;</span> 6k+2 = 2(3k+1) <span className='diff'>&rarr;</span> this pattern generates even numbers
            and it is not gonna generate any primes<br/><br/>
            if r = 3 <span className='diff'>&rarr;</span> 6k+3 = 3(2k+1) <span className='diff'>&rarr;</span> this pattern generates numbers which
            divisible by number 3 and it is not gonna generate any primes<br/><br/>
            if r = 4 <span className='diff'>&rarr;</span> 6k+4 = 2(3k+2) <span className='diff'>&rarr;</span> this pattern generates even numbers
            and it is not gonna generate any primes<br/><br/>
            if r = 5 <span className='diff'>&rarr;</span> this is one of the patterns that we achived to.<br/><br/>
          </code>
        </pre>

        <p className='specificP'>
          It seems that we have not done anything up to now. But lets talk about the
          extra numbers which these two patterns generate. And by extra numbers, i mean the
          not primes ones.
        </p>
        <pre>
          <code>
            <span className='not-prime'>25</span> &rarr; 5 * 5 <br/>
            <span className='not-prime'>35</span> &rarr; 5 * 7 <br/>
            <span className='not-prime'>49</span> &rarr; 7 * 7 <br/>
            <span className='not-prime'>55</span> &rarr; 5 * 11 <br/>
            <span className='not-prime'>65</span> &rarr; 5 * 13 <br/>
            <span className='not-prime'>77</span> &rarr; 7 * 11 <br/>
            <span className='not-prime'>85</span> &rarr; 5 * 17 <br/>
            <span className='not-prime'>91</span> &rarr; 7 * 13 <br/>
            <span className='not-prime'>95</span> &rarr; 5 * 19 <br/>
            ...
          </code>
        </pre>
        <p className='specificP'>
          It seems that all the extra numbers generated of multiplying each one them
          together.
        </p>
        <pre>
          <code>
          <table style={{height: "441px",width:"671"}}>
          <tbody>
          <tr>
          <td style={{width: "89px"}}>
          <p>Extra Numbers</p>
          </td>
          <td style={{width: "89px",background:'#ccc'}}>
          <p>5</p>
          </td>
          <td style={{width: "89px",background:'#ccc'}}>
          <p>7</p>
          </td>
          <td style={{width: "89px",background:'#ccc'}}>
          <p>11</p>
          </td>
          <td style={{width: "89px",background:'#ccc'}}>
          <p>13</p>
          </td>
          <td style={{width: "90px",background:'#ccc'}}>
          <p>17</p>
          </td>
          <td style={{width: "90px",background:'#ccc'}}>
          <p>19</p>
          </td>
          </tr>
          <tr>
          <td style={{width: "89px",background:'#ccc'}}>
          <p>5</p>
          </td>
          <td style={{width: "89px"}}>
          <p>25</p>
          </td>
          <td style={{width: "89px"}}>
          <p>35</p>
          </td>
          <td style={{width: "89px"}}>
          <p>55</p>
          </td>
          <td style={{width: "89px"}}>
          <p>65</p>
          </td>
          <td style={{width: "90px"}}>
          <p>85</p>
          </td>
          <td style={{width: "90px"}}>
          <p>95</p>
          </td>
          </tr>
          <tr>
          <td style={{width: "89px",background:'#ccc'}}>
          <p>7</p>
          </td>
          <td style={{width: "89px"}}>
          <p>35</p>
          </td>
          <td style={{width: "89px"}}>
          <p>49</p>
          </td>
          <td style={{width: "89px"}}>
          <p>77</p>
          </td>
          <td style={{width: "89px"}}>
          <p>91</p>
          </td>
          <td style={{width: "90px"}}>
          <p>119</p>
          </td>
          <td style={{width: "90px"}}>
          <p>133</p>
          </td>
          </tr>
          <tr>
          <td style={{width: "89px",background:'#ccc'}}>
          <p>11</p>
          </td>
          <td style={{width: "89px"}}>
          <p>55</p>
          </td>
          <td style={{width: "89px"}}>
          <p>77</p>
          </td>
          <td style={{width: "89px"}}>
          <p>121</p>
          </td>
          <td style={{width: "89px"}}>
          <p>143</p>
          </td>
          <td style={{width: "90px"}}>
          <p>187</p>
          </td>
          <td style={{width: "90px"}}>
          <p>209</p>
          </td>
          </tr>
          <tr>
          <td style={{width: "89px",background:'#ccc'}}>
          <p>13</p>
          </td>
          <td style={{width: "89px"}}>
          <p>65</p>
          </td>
          <td style={{width: "89px"}}>
          <p>91</p>
          </td>
          <td style={{width: "89px"}}>
          <p>143</p>
          </td>
          <td style={{width: "89px"}}>
          <p>169</p>
          </td>
          <td style={{width: "90px"}}>
          <p>221</p>
          </td>
          <td style={{width: "90px"}}>
          <p>247</p>
          </td>
          </tr>
          <tr>
          <td style={{width: "89px",background:'#ccc'}}>
          <p>17</p>
          </td>
          <td style={{width: "89px"}}>
          <p>85</p>
          </td>
          <td style={{width: "89px"}}>
          <p>119</p>
          </td>
          <td style={{width: "89px"}}>
          <p>187</p>
          </td>
          <td style={{width: "89px"}}>
          <p>221</p>
          </td>
          <td style={{width: "90px"}}>
          <p>289</p>
          </td>
          <td style={{width: "90px"}}>
          <p>323</p>
          </td>
          </tr>
          <tr>
          <td style={{width: "89px",background:'#ccc'}}>
          <p>19</p>
          </td>
          <td style={{width: "89px"}}>
          <p>95</p>
          </td>
          <td style={{width: "89px"}}>
          <p>133</p>
          </td>
          <td style={{width: "89px"}}>
          <p>209</p>
          </td>
          <td style={{width: "89px"}}>
          <p>247</p>
          </td>
          <td style={{width: "90px"}}>
          <p>323</p>
          </td>
          <td style={{width: "90px"}}>
          <p>361</p>
          </td>
          </tr>
          <tr>
          <td style={{width: "89px",background:'#ccc'}}>
          <p>23</p>
          </td>
          <td style={{width: "89px"}}>
          <p>115</p>
          </td>
          <td style={{width: "89px"}}>
          <p>161</p>
          </td>
          <td style={{width: "89px"}}>
          <p>253</p>
          </td>
          <td style={{width: "89px"}}>
          <p>299</p>
          </td>
          <td style={{width: "90px"}}>
          <p>391</p>
          </td>
          <td style={{width: "90px"}}>
          <p>437</p>
          </td>
          </tr>
          <tr>
          <td style={{width: "89px",background:'#ccc'}}>
          <p>25</p>
          </td>
          <td style={{width: "89px"}}>
          <p>125</p>
          </td>
          <td style={{width: "89px"}}>
          <p>175</p>
          </td>
          <td style={{width: "89px"}}>
          <p>275</p>
          </td>
          <td style={{width: "89px"}}>
          <p>325</p>
          </td>
          <td style={{width: "90px"}}>
          <p>425</p>
          </td>
          <td style={{width: "90px"}}>
          <p>475</p>
          </td>
          </tr>
          <tr>
          <td style={{width: "89px",background:'#ccc'}}>
          <p>29</p>
          </td>
          <td style={{width: "89px"}}>
          <p>145</p>
          </td>
          <td style={{width: "89px"}}>
          <p>203</p>
          </td>
          <td style={{width: "89px"}}>
          <p>319</p>
          </td>
          <td style={{width: "89px"}}>
          <p>377</p>
          </td>
          <td style={{width: "90px"}}>
          <p>493</p>
          </td>
          <td style={{width: "90px"}}>
          <p>551</p>
          </td>
          </tr>
          <tr>
          <td style={{width: "89px",background:'#ccc'}}>
          <p>31</p>
          </td>
          <td style={{width: "89px"}}>
          <p>155</p>
          </td>
          <td style={{width: "89px"}}>
          <p>217</p>
          </td>
          <td style={{width: "89px"}}>
          <p>341</p>
          </td>
          <td style={{width: "89px"}}>
          <p>403</p>
          </td>
          <td style={{width: "90px"}}>
          <p>527</p>
          </td>
          <td style={{width: "90px"}}>
          <p>589</p>
          </td>
          </tr>
          <tr>
          <td style={{width: "89px",background:'#ccc'}}>
          <p>35</p>
          </td>
          <td style={{width: "89px"}}>
          <p>175</p>
          </td>
          <td style={{width: "89px"}}>
          <p>245</p>
          </td>
          <td style={{width: "89px"}}>
          <p>385</p>
          </td>
          <td style={{width: "89px"}}>
          <p>455</p>
          </td>
          <td style={{width: "90px"}}>
          <p>595</p>
          </td>
          <td style={{width: "90px"}}>
          <p>665</p>
          </td>
          </tr>
          </tbody>
          </table>
        </code>
      </pre>

      <p className='specificP'>
        Therefore, it is important to form an extra numbers formula.
        For this, the patterns must be multiplied to itself by another index.
        Then the result must be equaled to the pattern by another index. The obtained
        relationship between the indexes results in the extra indexes. By writing all the
        scenarios, the patterns is going to be like the below equation:
      </p>
      <pre>
        <code>
          <span className='not-prime'>a(n) = 5 + 3n+ ((-1)<sup>n</sup> - 1)/<sub>2</sub> <br/><br/></span>
          <span className='diff'>conditions: <br/></span>
          1: n >= 0 ; a(-2) = 2 ; a(-1) = 3 <br/><br/>
          2: if n: even &rarr; n/<sub>2</sub> -7k -5 &#8800; 0 (mod 6k + 5 )<br/><br/>
          3: if n: odd &rarr; (n-1)/<sub>2</sub> -7k -7 &#8800; 0 (mod 6k + 7 )<br/><br/>
          4: if n: odd &rarr; (n-1)/<sub>2</sub> -5k -3 &#8800; 0 (mod 6k + 5 )<br/>
        </code>
      </pre>
      <p className='specificP'>
        This is the basic achievement. I have done many deeper stages to make the conditions
        more simpler. If you want, you can email me: <span className='diff'>farid.masjedi1985@gmail.com</span>
      </p>
    </div>

  )


}

export default PrimePattern;
