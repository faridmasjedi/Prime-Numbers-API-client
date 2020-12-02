import React, {Component} from 'react';
import Layout from './Layout';
import axios from 'axios';

class PrimesToANumber extends Component {
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
    const url = `http://localhost:2357/primes_to_a_number?pCheck=${number}`;
    axios(url).then( (data) => {
      console.log(data.data)
      this.setState({ result: data.data });
    })
  }
  output(){
    const {result,number} = this.state;
    const res = result[0];

    if (res!== ""){
      return(
        <div>
          {res.map((divs) => (
            <div key={Math.random()} className='divisions'>{divs}</div>
          ))}
        </div>
      )
    }
  }

  render(){
    const {number,result} = this.state;
    const resSize = result[1];
    return(
      <div className='container' style={{ minHeight: '810px' }}>

        <Layout />
        <hr/>

        <h3>Primes From First One to the Specific Number</h3>
        <p className='specificP'>Prime numbers are the numbers with two factors, itself and
          1.<br/><br/>This page will give all prime numbers from 1 to the number that has been
          entered.
        </p>
        <hr/>

        <h3>How to use</h3>
        <p className='specificP'> if you want to use this api option, to find out
          what are the primes before a number, use the below url:
          <p style={{color:'rgba(0,0,255,0.7)',fontStyle:'italic'}}>
            {"http://localhost:2357/primes_to_a_number?pCheck=<number>"}
          </p>
          <p>and then just change the {"<number>"} to your number or variable.</p>
        </p>
        <hr/>

        <h3>Primes to a number</h3>
        <h4>Give it a try</h4>
        <form onSubmit={this._handleSubmit}>
          <label> Number:
            <input onInput={this._handleInput} />
          </label>
          <button> Result </button>
        </form>

        <br/>
        {result!=='' ? <div>
                        <p>- There are {resSize} prime numbers up to {number} </p>
                        <label>- Primes to {number}:<div> {this.output()} </div></label>
                       </div>
        : null }

      </div>
    )
  }
}

export default PrimesToANumber;
