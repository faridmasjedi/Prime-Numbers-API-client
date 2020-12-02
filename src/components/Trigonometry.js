import React, {Component} from 'react';
import axios from 'axios';

class Trigonometry extends Component {
  constructor(){
    super();
    this.state = {
      degree: '',
      obj:{},
      c:''
    }
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this)

  }

  componentDidMount(){
    const circle = document.getElementById("polarPlot");
    let ctx = circle.getContext("2d");
    // for(let i=40; i<300; i=i+40){
    //   ctx.moveTo(i,0);
    //   ctx.lineTo(i,200);
    //   ctx.strokeStyle = '#000000'
    //   ctx.globalAlpha = 0.05;
    //   ctx.stroke();
    //
    //   ctx.moveTo(0,i);
    //   ctx.lineTo(300,i);
    //   ctx.strokeStyle = '#000000'
    //   ctx.globalAlpha = 0.05;
    //   ctx.stroke();
    // }

    this.setState({ c: circle})
  }

  _handleInput(e) {
    this.setState({ degree: e.target.value })
    this.setState({ obj: {}})
    let c = this.state.c;
    // let ctx = c.getContext('2d');
    // ctx.clearRect(0, 0, c.width, c.height);
    c.width+=0;
  }

  _handleSubmit(e) {
    e.preventDefault();
    const degree = this.state.degree;
    console.log(degree)
    const url = `http://localhost:2357/trigonometry?degree=${degree}`;
    axios(url).then( (data) => {
      this.setState({obj:data.data})
    })
  }

  degreeTrigonometry(){
    let output;
    Object.keys(this.state.obj).length===6 ? output=true : output=false;
    const {degree,obj,c} = this.state;
    console.log(output)


    if (output) {
      let circle = c;
      let ctx = c.getContext('2d');
      // ctx.clearRect(0, 0, c.width, c.height);

      let teta = 0;
      let tetaEnd = 0;



      function draw(){
        console.log(y);
        console.log(teta);

        if (tetaEnd > -obj["deg(rad)"]){
          teta = teta-Math.PI/180;
          ctx.beginPath();
          ctx.arc(150,75,50, teta,tetaEnd);
          ctx.strokeStyle = '#0000cc'
          ctx.stroke();
          tetaEnd = teta;
        }else{
          clearInterval(y);
          let diff = 1;
          function drawLine(){

            if (diff<50){
              let ctx = c.getContext('2d');
              ctx.moveTo(150,75);
              ctx.lineTo(150+obj["cos(degree)"]*diff,75-obj["sin(degree)"]*diff);
              ctx.strokeStyle = '#ff0000'
              // ctx.globalAlpha = 0.05;
              ctx.stroke();
              diff++
            }else{
              clearInterval(z);
            }
          }
          let z = setInterval(drawLine,50)
          // ctx.moveTo(150,75);
          // ctx.lineTo(150+obj["cos(degree)"]*50,75-obj["sin(degree)"]*50);
          // ctx.strokeStyle = '#ff0000'
          // // ctx.globalAlpha = 0.05;
          // ctx.stroke();
        }
      }

      let y = setInterval(draw,100);
      // ctx.moveTo(150,75);
      // ctx.lineTo(200,75);
      // ctx.strokeStyle = '#0000ff'
      // // ctx.globalAlpha = 0.05;
      // ctx.stroke();


      ctx.moveTo(100,75);
      ctx.lineTo(200,75);
      ctx.strokeStyle = '#0000ff'
      // ctx.globalAlpha = 0.1;
      ctx.stroke();
      ctx.moveTo(150,25);
      ctx.lineTo(150,125);
      ctx.strokeStyle = '#0000ff'
      // ctx.globalAlpha = 0.1;
      ctx.stroke();
      ctx
      // let circle = c;
      // let ctx = c.getContext('2d');
      // ctx.beginPath();
      // ctx.arc(150,100,50, -obj["deg(rad)"],0);
      // ctx.stroke();
      return (
        <div className='trigonometry'>
          <p> cos({degree}) = {obj["cos(degree)"]}</p>
          <p> sin({degree}) = {obj["sin(degree)"]}</p>
          <p> tan({degree}) = {obj["tan(degree)"]}</p>
          <p> cot({degree}) = {obj["cot(degree)"]}</p>
          <p> {degree}° = {(degree/180).toFixed(3)}&pi;</p>
        </div>
      )
    }
  }

  render(){
    return(
      <div>
        <h1>Trigonometry</h1>

        <form onSubmit={this._handleSubmit}>
          <label>
            Degree:
            <input onInput={this._handleInput}/>
          </label>
          <button>Click</button>
        </form>
        {this.degreeTrigonometry()}
        <canvas id="polarPlot" className='polarPlot' style={{border:'1px solid black'}}></canvas>
      </div>
    )
  }

}

export default Trigonometry;
