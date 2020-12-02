import React, {Component} from 'react';
import Layout from './Layout';
import axios from 'axios';

class PrimesTwinCheck extends Component {
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
    const url = `https://prime-numbers-api-server.herokuapp.com/primes_has_twin?pCheck=${number}`;
    axios(url).then( (data) => {
      this.setState({ result: data.data });
    })
  }
  output(){
    const {result,number} = this.state;

    const firstRes = result[0];
    const secondRes = result[1];
    const thirdRes = result[2];
    const forthRes = result[3];

    let resultOutput = '';

    if (result !== ""){
      if (!secondRes){  return <p>- The number {number} is not a prime number.</p>}

      if (!firstRes){
        resultOutput =  `- The number ${number} is a prime number. ${secondRes} is not prime.`
      }else{
        resultOutput =  `- The number ${number} and ${secondRes} are twin primes.`
      }
      if (!thirdRes){
        if (resultOutput ==='') {
          resultOutput =  `- The number ${number} is a prime number. ${forthRes} is not prime.`
        }else{
          resultOutput += ` ${forthRes} is not a prime.`
        }
      }else{
        if (resultOutput ==='') {
          resultOutput =  `- The number ${number} and ${forthRes} are twin primes.`
        }else{
          resultOutput += ` ${forthRes} and ${number} are twin primes.`
        }
      }
      if (firstRes && thirdRes){
        resultOutput = `- The number ${number}, ${forthRes} and ${secondRes} are twin primes`
      }
    }
    return <p> {resultOutput} </p>
  }

  render(){
    const {number,result} = this.state;
    return(
      <div className='container' style={{ minHeight: '795px' }}>

        <Layout />
        <hr/>

        <h3>What is Twin Prime</h3>
        <p className='specificP'>A twin prime is a prime number that is either 2 less
          or 2 more than another prime number—for example, either member of the twin
          prime pair (41, 43). In other words, a twin prime is a prime that has a prime
          gap of two. Sometimes the term twin prime is used for a pair of twin primes;
          an alternative name for this is prime twin or prime pair.<br/><br/>This page
          will check if a prime number is Twin or not.
        </p>
        <hr/>

        <h3>How to use</h3>
        <p className='specificP'> if you want to use this api option, to find out
          whether a prime number has a twin or not, use the below url:
          <p style={{color:'rgba(0,0,255,0.7)',fontStyle:'italic'}}>
            {"https://prime-numbers-api-server.herokuapp.com/primes_has_twin?pCheck=<number>"}
          </p>
          <p>and then just change the {"<number>"} to your number or variable.</p>
        </p>
        <hr/>
        <h3>Twin Prime</h3>
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

export default PrimesTwinCheck;
