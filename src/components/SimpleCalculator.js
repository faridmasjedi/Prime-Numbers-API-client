import React , { Component } from 'react';
// import CalcButtons from './CalcButtons';
import Layout from './Layout';
import axios from 'axios';

class SimpleCalculator extends Component {

  render(){
    return(
      <div className="container">
        <Layout />
        <CalcButtons />
      </div>
    )
  }

};

class CalcButtons extends Component {
  constructor(){
    super();

    this.state = {
      equation: '',
      result: '',
      operation: '',
      num1: '',
      num2: '',
      obj: '',
      degree: 45
    }
    this._handleNumbersClick = this._handleNumbersClick.bind(this);
    this._handleOperationClick = this._handleOperationClick.bind(this);
    this._onClick = this._onClick.bind(this);

  }

  componentDidMount() {
    // fetch('http://localhost:2357/trigonometry?degree=25')
    // .then(response => response.json() )
    // .then(res => {
    //   if (res.data){
    //     this.setState({ obj: res.data})
    //   }
    // })
    var elt = document.getElementById('calculator');
    var calculator = Desmos.GraphingCalculator(elt);
    calculator.setExpression({ id: 'graph1', latex: 'y=x^2' });
    // const degree = this.state.degree
    // const url =`http://localhost:2357/trigonometry?degree=${degree}`
    // axios(url).then((data) => {
    //   this.setState({obj: data.data})
    // })
  }


  _handleNumbersClick(e){
    let { num1 , num2, equation, operation } = this.state

    if (!this.state.operation) {
      this.setState({ num1: num1 + e.target.innerText,
                      equation: num1 + e.target.innerText })
    } else {
      this.setState({ num2: num2 + e.target.innerText,
                      equation: equation + e.target.innerText })

    }
  }

  _handleOperationClick(e){
    this.setState({ operation: e.target.innerText,
                    equation: this.state.equation+' '+e.target.innerText+' '})
  }

  _onClick(e){
    const { num1 , num2, operation} = this.state;
    if (num1 && num2){
      const number1 = Number(num1);
      const number2 = Number(num2);

      if (operation ==='+'){
        this.setState({ result: number1+number2 })
      }else if (operation ==='-'){
        this.setState({ result: number1 - number2})
      }else if (operation ==='*'){
        this.setState({ result: number1 * number2 })
      }else if (operation ==='/'){
        this.setState({ result: number1/number2 })
      }else if (operation ==='^'){
        this.setState({ result: number1 ** number2 })
      }else {
        this.setState({ result: number1%number2 })
      }

      this.setState({ num1:'', num2:'',operation:'' })
    }else{
      this.setState({ result:'' })

    }

  }

  render(){

    return(
      <div>
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
          <div className='operations' onClick={this._handleOperationClick}>+</div>
          <div className='operations' onClick={this._handleOperationClick}>-</div>
          <div className='operations' onClick={this._handleOperationClick}>*</div>
          <div className='operations' onClick={this._handleOperationClick}>/</div>
          <div className='operations' onClick={this._handleOperationClick}>^</div>
          <div className='operations' onClick={this._handleOperationClick}>%</div>

        </div>
        <div>
          <div className='calcOperation'>
            {this.state.equation}
          </div>

          <div className='resultOperation'>
            {this.state.result}
          </div>


        </div>
        <div id="calculator" style={{width: '600px', height: '400px'}}></div>

      </div>
    )

  }
}

export default SimpleCalculator;
