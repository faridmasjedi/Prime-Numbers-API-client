import React, { Component } from 'react';
import Layout from './Layout';

class AdvancedMath extends Component {
  constructor(){
    super();

    this.state = {
      equation: '',
      result: '',
      operation: '',
      num: ''
    }
    this._handleNumbersClick = this._handleNumbersClick.bind(this);
    this._handleOperationClick = this._handleOperationClick.bind(this);
    this._onClick = this._onClick.bind(this);
    this._changeToDeg = this._changeToDeg.bind(this);
    this._changeToRad = this._changeToRad.bind(this);
  }

  _handleNumbersClick(e){
    let { num ,equation, operation } = this.state;
    let number = num;
    if (!this.state.operation) {

      this.setState({ result: '' });

    } else {
      this.setState({ num: num + e.target.innerText});
    }
    number = num + e.target.innerText;

    if (operation === 'sin(x)'){
      this.setState({ equation: `sin(${number})`});
    }else if (operation === 'cos(x)'){
      this.setState({ equation: `cos(${number})`});
    }else if (operation === 'tan(x)'){
      this.setState({ equation: `tan(${number})`});
    }else if (operation === 'cot(x)'){
      this.setState({ equation: `cot(${number})`});
    }else if (operation === 'cos(x)'){
      this.setState({ equation: `cos(${number})`});
    }else if (operation === 'factorial'){
      this.setState({ equation: `${number}!`});
    }else if (operation === 'exp'){
      this.setState({ equation: `exp(${number})`});
    }
  }

  _handleOperationClick(e){
    this.setState({ operation: e.target.innerText,
                    equation: e.target.innerText
    })
  }

  _onClick(e){
    const { num, operation} = this.state;

    const number = Number(num);

    if (operation.includes('sin')){
      this.setState({ result: Math.sin(number) })
    }else if (operation.includes('cos')){
      this.setState({ result: Math.cos(number)})
    }else if (operation.includes('tan')){
      this.setState({ result: Math.sin(number)/Math.cos(number) })
    }else if (operation.includes('cot')){
      this.setState({ result: Math.cos(number)/Math.sin(number) })
    }else if (operation.includes('exp')){
      this.setState({ result: Math.exp(number) })
    }else {
      this.setState({ result: factorial(number) })
    }

    this.setState({ num:'',operation:'' })
  }

  _changeToDeg() {
    this.setState({num: Number(this.state.num)*180/Math.PI})
    console.log(this.state.num)
  }
  _changeToRad() {
    const radian = Number(this.state.num)*Math.PI/180;
    this.setState({num: radian})
  }

  render(){

    return(
      <div className="container">
        <Layout />

        <div className='calcBody'>
          { [...Array(10).keys()].map( (num) => (
            <div className='numbers' onClick={this._handleNumbersClick} key={num}>{num}</div>
          )) }
          <div className='numbers' onClick={this._handleNumbersClick}>.</div>
          <div className='resultButton' className='numbers' onClick= { this._onClick }>
            =
          </div>
        </div>

        <div className='operationsDiv'>
          <div className='operations' onClick={this._changeToDeg}>deg</div>
          <div className='operations' onClick={this._changeToRad}>Rad</div>
          <div className='operations' onClick={this._handleOperationClick}>sin(x)</div>
          <div className='operations' onClick={this._handleOperationClick}>cos(x)</div>
          <div className='operations' onClick={this._handleOperationClick}>tan(x)</div>
          <div className='operations' onClick={this._handleOperationClick}>cot(x)</div>
          <div className='operations' onClick={this._handleOperationClick}>factorial</div>
          <div className='operations' onClick={this._handleOperationClick}>exp</div>
          <div className='operations' onClick={this._handleOperationClick}>exp2</div>

        </div>
        <div>
          <div className='calcOperation'>
            {this.state.equation}
          </div>

          <div className='resultOperation'>
            {this.state.result}
          </div>

        </div>
      </div>
    )

  }
}

const factorial = (num, memory={1:1}) => {
  if (memory[num]) {return memory[num]};
  memory[num] = num.factorial*(num-1)
  return num*factorial(num-1, memory);
}

export default AdvancedMath;
