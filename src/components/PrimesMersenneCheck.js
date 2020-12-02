import React, {Component} from 'react';
import Layout from './Layout';
import axios from 'axios';

class PrimesMersenneCheck extends Component {
  constructor(){
    super();
    this.state = {
      number: '',
      result: ''
    }
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this.output = this.output.bind(this);

  }

  _handleInput(e){
    this.setState({ number: e.target.value})
    this.setState({ result: '' })
  }
  _handleSubmit(e){
    e.preventDefault();
    const {number} = this.state;
    const url = `http://localhost:2357/primes_is_mersenne?pCheck=${number}`;
    axios(url).then( (data) => {
      this.setState({ result: data.data });
    })
  }
  output(){
    const {result,number} = this.state;
    const firstRes = result[0];
    const secondRes = result[1];
    if (result !== ""){
      if (!secondRes){ return <p>- The number {number} is not a prime number </p>}

      if (!firstRes){
        return <p>- The number {number} is a prime number,but {secondRes} is not prime </p>
      }
      return <p>- The number {number} and {secondRes} are Mersenne primes </p>
    }
  }

  render(){
    const {number,result} = this.state;
    return(
      <div className='container' style={{ minHeight: '775px' }}>

        <Layout />
        <hr/>

        <h3>What is Mersenne Prime</h3>
        <p className='specificP'>In mathematics, a Mersenne prime is a prime number
          that is one less than a power of two. That is, it is a prime number of the
          form M(p) = 2<sup>p</sup> − 1 for a prime number(p).<br/><br/>This page will check
          if a prime number is Mersenne or not.
        </p>
        <hr/>

        <h3>How to use</h3>
        <p className='specificP'> if you want to use this api option, to find out
          whether a prime number is a mersenne prime or not, use the below url:
          <p style={{color:'rgba(0,0,255,0.7)',fontStyle:'italic'}}>
            {"http://localhost:2357/primes_is_mersenne?pCheck=<number>"}
          </p>
          <p>and then just change the {"<number>"} to your number or variable.</p>
        </p>
        <hr/>

        <h3>Mersenne Prime</h3>
        <h4>Give it a try</h4>
        <form onSubmit={this._handleSubmit}>
          <label> Number:
            <input onInput={this._handleInput} />
          </label>
          <button> Result </button>
        </form>
        <br/>
        {result!=='' ? <div> {this.output()} </div> : null }

      </div>
    )
  }
}

export default PrimesMersenneCheck;
