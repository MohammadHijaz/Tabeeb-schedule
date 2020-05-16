import React, { Component } from 'react';
import Styles from 'styled-components';
import Button from '@material-ui/core/Button';
  const MainContainer = Styles.div`
  display : flex;
  background-color: #e1ccec;
  align-items: center;
  flex-direction : column;
  justify-content: center;
  position : absolute;
  height : 100%;
  width : 100%;
  padding : 15px;
  .hide {
  font-size : 0%;
  background-color: #e1ccec;
  }
  .box-container {
    display : flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction : row;
    width : 100%;
    background-color: white;
    height : 100%;
    .box {
      width: 20px;
      border: 10px ;
      border-style: dotted;
      border-color: #bbded6;
      padding: 50px;
      margin: 20px;
      text-align: center;
      font-size : 200%;
    }  
  }
  `;
export default class CodesGen extends Component {
        
        state = {
            code : "",
            Text : "Copy Code",
            Generate : true,
            copiedTextColor : 'white',
        }
        Generate = () => {
            let s = "";
            for (let i = 0; i < 4; i++) {
                let a = Math.round(Math.random() * 9);
                s += a;
              }
                this.setState({Generate : false}) 
                return s;
        }
        Copy = () => {
          const copystring = this.textArea
          copystring.select();
          document.execCommand('copy');
          this.setState({Text : "Text Copied Successfully!!"})
          this.setState({copiedTextColor : 'white'})
        }
  render() {
    if(this.state.Generate){this.setState({code : this.Generate()})}
    return (
      <MainContainer>  
          <textarea
          class="hide"
          style={{width : "0%",height : "0%"}}
          ref={(textarea) => this.textArea = textarea}
          value={this.state.code}
          />
        <h1 style= {{color:'white'}}>Here is Your Code</h1>
        <div class="box-container">
              <p class="box">{this.state.code[0]}</p>
              <p class="box">{this.state.code[1]}</p>
              <p class="box">{this.state.code[2]}</p>
              <p class="box">{this.state.code[3]}</p>      
        </div>
        <br/>
        <Button style={{color : 'white', backgroundColor : '#bbded6'}} onClick={() => this.Copy()}>Copy</Button>
        <span style={{color : this.state.copiedTextColor , fontWeight : 'bold'}}>{this.state.Text}</span>
      </MainContainer>    
    );
  }
}