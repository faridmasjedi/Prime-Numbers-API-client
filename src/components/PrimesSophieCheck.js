import React, {Component} from 'react';
import Layout from './Layout';
import Nav from './Nav';
import axios from 'axios';

class PrimesSophieCheck extends Component {
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
    const url = `https://prime-numbers-api-server.herokuapp.com/primes_is_sophie?pCheck=${number}`;
    axios(url).then( (data) => {
      this.setState({ result: data.data });
    })
  }

  output(){
    const {result,number} = this.state;
    const firstRes = result[0];
    const secondRes = result[1];

    if (result !== ""){
      if (!secondRes){ return <p>- The number {number} is not a prime number. </p>}

      if (!firstRes){
        return <p>- The number {number} is a prime number, but {secondRes} is not prime. </p>
      }
      return <p>- The number {number} and {secondRes} are sophie primes. </p>
    }
  }

  render(){

    const {number,result} = this.state;
    return(
      <div className='container' style={{ minHeight: '775px' }}>

        <Layout />
        <hr/>
        <Nav />

        <div className='doc'>

          <h3>What is Sophie Prime</h3>
          <p className='specificP'>In number theory, a prime number p is a Sophie
            prime if 2p + 1 is also prime.  For example, 11 is a Sophie prime because
            2 × 11 + 1 = 23 is a prime number.<br/><br/>This page will check if a prime
            numbers is Sophie prime or not.
          </p>
          <hr/>

          <h3>How to use</h3>
          <p className='specificP'> if you want to use this api option, to find out
            whether a prime number is a sophie prime or not, use the below url:
            <p style={{color:'rgba(0,0,255,0.7)',fontStyle:'italic'}}>
              {"https://prime-numbers-api-server.herokuapp.com/primes_is_sophie?pCheck=<number>"}
            </p>
            <p>and then just change the {"<number>"} to your number or variable.</p>
          </p>
          <hr/>

          <h3>Sophie Prime</h3>
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
      </div>
    )
  }
}

export default PrimesSophieCheck;
