import React,{Component} from 'react';
import Layout from './Layout';
import Nav from './Nav';
import axios from 'axios';

class Primes extends Component{
  constructor(){
    super();
    this.state={
      array:[],
      number:'',
      isLoaded: null
    }

    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this.primeOutput = this.primeOutput.bind(this);
  }

  _handleInput(e){
    this.setState({ number: e.target.value,
                    array:[] })
  }

  _handleSubmit(e){
    e.preventDefault();
    const {number} = this.state;
    const url = `https://prime-numbers-api-server.herokuapp.com/prime?pCheck=${number}`
    axios(url).then((data)=>{
      this.setState({ array: [data.data.isPrime, data.data.divisions, data.data.Primes[0],data.data.Primes[1]],
                      isLoaded: true
                    });
    })
  }

  primeOutput(){
    const primeArray = this.state.array;
    const isLoaded = this.state.isLoaded;
    const number = this.state.number;

    if (primeArray.length){
      const isPrime = primeArray[0];
      const divisions = primeArray[1];
      const primeFromFirst = primeArray[2];
      const numberOfPrimes = primeArray[3];

      return (
        <div>
          <hr/>

          <p>- {number} is {isPrime} </p>
          <p><div>- Prime factors:<br/>
            {divisions.map( (div) => (
              <div className='divisions'>{div}</div>
            ))}
          </div></p>

          <p>- There are {numberOfPrimes} primes before {number}</p>
          <div>- Prime from the first:<br/>
            {primeFromFirst.map( (prime) => (
              <div className='primes'>{prime}</div>
            ))}
          </div>

        </div>
      )
    }
  }

  render(){
    return(
      <div className='container' style={{ minHeight: '885px' }}>

        <Layout />
        <hr/>
        <Nav />

        <div className='doc'>

          <h3>Numbers</h3>
          <p className='specificP'>Every numbers has factors. The factors of a number are the numbers
            that divide evenly into the number. For example the factors of the number
            12 are the numbers 1, 2, 3, 4, 6 and 12. All numbers can be produced by prime numbers.
            For example, 12 is equal to 2<sup>2</sup>*3.<br/><br/>If a number has two factors,
            itself and 1, then it is a prime number.<br/><br/>This page will give the prime factors
            of a number (with output of a prime number with amount of it's power), check if it is a
            prime number or not, and will give the primes up to a number.
          </p>
          <hr/>

          <h3>How to use</h3>
          <p className='specificP'> if you want to use this api option, to find if the
            number is prime or not, what are the divisions of this number and
            what are the primes before this number, use the below url:
            <p style={{color:'rgba(0,0,255,0.7)',fontStyle:'italic'}}>
              {"https://prime-numbers-api-server.herokuapp.com/prime?pCheck=<number>"}
            </p>
            <p>and then just change the {"<number>"} to your number or variable.</p>
          </p>
          <hr/>

          <h3>Check a number</h3>
          <form onSubmit={this._handleSubmit}>
            <label>
              Number:
              <input onInput={this._handleInput} />
            </label>
            <button>check</button>
          </form>

          {this.primeOutput()}
          
        </div>
      </div>
    )
  }
}

export default Primes;
