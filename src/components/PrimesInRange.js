import React, {Component} from 'react';
import Layout from './Layout';
import axios from 'axios';

class PrimesInRange extends Component {
  constructor(){
    super();
    this.state = {
      rangeStart: '',
      rangeEnd: '',
      result: ''
    }
    this._handleInputStart = this._handleInputStart.bind(this);
    this._handleInputEnd = this._handleInputEnd.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this.output = this.output.bind(this);

  }

  _handleInputStart(e){
    this.setState({ rangeStart: e.target.value})
    this.setState({ result: '' })
  }
  _handleInputEnd(e){
    this.setState({ rangeEnd: e.target.value})
    this.setState({ result: '' })
  }

  _handleSubmit(e){
    e.preventDefault();
    const {rangeStart,rangeEnd} = this.state;
    const url = `https://prime-numbers-api-server.herokuapp.com/primes_in_bound?rangeS=${rangeStart}&rangeE=${rangeEnd}`;
    axios(url).then( (data) => {
      this.setState({ result: data.data });
    })
  }
  output(){
    const {result,rangeStart,rangeEnd} = this.state;
    const res = result[0];
    if (res !== ""){
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
    const {rangeStart,rangeEnd,result} = this.state;
    const resultSize = result[1];

    return(
      <div className='container' style={{ minHeight: '810px' }}>

        <Layout />
        <hr/>

        <h3>Primes In a Range</h3>
        <p className='specificP'>Prime numbers are the numbers with two factors, itself and
          1.<br/><br/>This page will give all prime numbers in a range.
        </p>
        <hr/>

        <h3>How to use</h3>
        <p className='specificP'> if you want to use this api option, to find out
          what are the primes before a number, use the below url:
          <p style={{color:'rgba(0,0,255,0.7)',fontStyle:'italic'}}>
            {"https://prime-numbers-api-server.herokuapp.com/primes_in_bound?rangeS=<start>&rangeE=<end>"}
          </p>
          <p>and then just change the {"<start> and <end>"} to your variables.</p>
        </p>
        <hr/>

        <h3>Primes in a range </h3>
        <h4>Give it a try</h4>
        <form onSubmit={this._handleSubmit}>
          <label> Range Start Number:
            <input onInput={this._handleInputStart} />
          </label>
          <label> Range End Number:
            <input onInput={this._handleInputEnd} />
          </label>
          <button> Result </button>
        </form>
        <br/>
        {result!=='' ? <div>
                          <p>- There are {resultSize} prime numbers in ({rangeStart} , {rangeEnd}) </p>
                          <label>- Primes between {rangeStart} and {rangeEnd}:
                            <div> {this.output()} </div>
                          </label>
                       </div>
        : null }

      </div>
    )
  }
}

export default PrimesInRange;
