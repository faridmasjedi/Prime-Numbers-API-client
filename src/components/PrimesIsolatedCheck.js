import React, {Component} from 'react';
import Layout from './Layout';
import Nav from './Nav';
import axios from 'axios';

class PrimesIsolatedCheck extends Component {
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
    const url = `https://prime-numbers-api-server.herokuapp.com/primes_is_isolated?pCheck=${number}`;
    axios(url).then( (data) => {
      this.setState({ result: data.data });
    })
  }

  render(){
    const {number,result} = this.state;

    return(
      <div className='container' style={{ minHeight: '750px' }}>

        <Layout />
        <hr/>
        <Nav />

        <div className='doc'>

          <h3>What is Isolated Prime</h3>
          <p className='specificP'>An isolated prime (also known as single prime or
            non-twin prime) is a prime number p such that neither p − 2 nor p + 2 is prime.
            In other words, p is not part of a twin prime pair. For example, 23 is an
            isolated prime, since 21 and 25 are both composite.<br/><br/>This page
            will check if a prime number is Isolated or not.
          </p>
          <hr/>

          <h3>How to use</h3>
          <p className='specificP'> if you want to use this api option, to find if a
            number is isolated prime or not, use the below url:
            <p style={{color:'rgba(0,0,255,0.7)',fontStyle:'italic'}}>
              {"https://prime-numbers-api-server.herokuapp.com/primes_is_isolated?pCheck=<number>"}
            </p>
            <p>and then just change the {"<number>"} to your number or variable.</p>
          </p>
          <hr/>

          <h3>Check for being isolated Prime or not</h3>
          <h4>Give it a try</h4>
          <form onSubmit={this._handleSubmit}>
            <label> Number:
              <input onInput={this._handleInput} />
            </label>
            <button> Check </button>
          </form>

          {number !== "" ? <p>{result}</p> : null}
          
        </div>
      </div>
    )
  }
}

export default PrimesIsolatedCheck;
