import React, {Component} from 'react';
import Layout from './Layout';
import axios from 'axios';

class Divisions extends Component {
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
    const url = `https://prime-numbers-api-server.herokuapp.com/primeDivisions?pCheck=${number}`;
    axios(url).then( (data) => {
      this.setState({ result: data.data });
    })
  }
  output(){
    const {result} = this.state;
    if (result!== ""){
      return(
        <div>
        {result.map((divs) => (
          <div key={Math.random()} className='divisions'>{divs}</div>
        ))}
        </div>
      )
    }
  }

  render(){
    const {number,result} = this.state;
    return(
      <div className='container' style={{ minHeight: '825px' }}>

        <Layout />
        <hr/>

        <h3>Numbers and Factors</h3>
        <p className='specificP'>Every numbers has factors. The factors of a number are the numbers
          that divide evenly into the number. For example the factors of the number
          12 are the numbers 1, 2, 3, 4, 6 and 12.<br/><br/>If a number has two factors,
          itself and 1, then it is a prime number.<br/><br/>This page will give the prime factors
          of a number (with output of a prime number with amount of it's power).
        </p>
        <hr/>

        <h3>How to use</h3>
        <p className='specificP'> if you want to use this api option, to find out
          what is the division of a number, use the below url:
          <p style={{color:'rgba(0,0,255,0.7)',fontStyle:'italic'}}>
            {"https://prime-numbers-api-server.herokuapp.com/primeDivisions?pCheck=<number>"}
          </p>
          <p>and then just change the {"<number>"} to your number or variable.</p>
        </p>
        <hr/>

        <h3>Prime Factors</h3>
        <h4>Give it a try</h4>
        <form onSubmit={this._handleSubmit}>
          <label> Number:
            <input onInput={this._handleInput} />
          </label>
          <button> Result </button>
        </form>
        <br/>
        {result!=='' ? <label>Divisions:<div> {this.output()} </div></label>
        : null }

      </div>
    )
  }
}

export default Divisions;
