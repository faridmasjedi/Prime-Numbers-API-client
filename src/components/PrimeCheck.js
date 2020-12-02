import React, {Component} from 'react';
import Layout from './Layout';
import axios from 'axios';

class PrimeCheck extends Component {
  constructor(){
    super();
    this.state = {
      number: '',
      result: ''
    }
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInput(e){
    this.setState({ number: e.target.value})
    this.setState({ result: '' })
  }
  _handleSubmit(e){
    e.preventDefault();
    const {number} = this.state;
    const url = `https://prime-numbers-api-server.herokuapp.com/primeCheck?pCheck=${number}`;
    axios(url).then( (data) => {
      this.setState({ result: `- Number ${number} is ${data.data}.` });
    })
  }

  render(){
    const {number,result} = this.state;

    return(
      <div className='container' style={{ minHeight: '795px' }}>

        <Layout />
        <hr/>

        <h3>Prime Check</h3>
        <p className='specificP'>Every numbers has factors. The factors of a number are the numbers
          that divide evenly into the number. For example the factors of the number
          12 are the numbers 1, 2, 3, 4, 6 and 12.<br/><br/>If a number has two factors,
          itself and 1, then it is a prime number.<br/><br/>This page will check if a
          number is prime number or not.
        </p>
        <hr/>

        <h3>How to use</h3>
        <p className='specificP'> if you want to use this api option, to find if a
          number is prime or not, use the below url:
          <p style={{color:'rgba(0,0,255,0.7)',fontStyle:'italic'}}>
            {"https://prime-numbers-api-server.herokuapp.com/primeCheck?pCheck=<number>"}
          </p>
          <p>and then just change the {"<number>"} to your number or variable.</p>
        </p>
        <hr/>

        <h3>Check for being Prime or not</h3>
        <h4>Give it a try</h4>
        <form onSubmit={this._handleSubmit}>
          <label> Number:
            <input onInput={this._handleInput} />
          </label>
          <button> Check </button>
        </form>
        {number !== "" ? <p>{result}</p> : null}
      </div>
    )
  }
}

export default PrimeCheck;
