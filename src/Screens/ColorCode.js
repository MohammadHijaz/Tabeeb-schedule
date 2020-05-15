
import React, { Component } from 'react';
import Button from '../Components/Button';
import PopUp from '../Components/PopUp';
import '../css/ColorCode.css'
import { green } from '@material-ui/core/colors';
class ColorCode extends Component {
    state = {
        showPopUp : false,
        popupBackgroundColor : "white",
        popupTextColor : "black",
        displayedText : "anything"
    }
    changePopUp = (backgroundColor,textColor,text) => {
        this.setState({showPopUp : !this.state.showPopUp})
        this.setState({popupBackgroundColor : backgroundColor})
        this.setState({popupTextColor : textColor})
        this.setState({displayedText : text})
    }
    render() {
        return (

            <div>
                 {this.state.showPopUp ?
                    <PopUp
                        title={"code " + this.state.popupBackgroundColor}
                        close={() => this.changePopUp()}
                        background = {this.state.popupBackgroundColor}
                        color = {this.state.popupTextColor}
                        text = {this.state.displayedText}
                    />
                    : null
                }
                {!this.state.showPopUp ?
                 <div className="container22">
                    <div className="column">
                        <div className="box">
                            <Button color ="green" text="code Green" onClick={() => this.changePopUp("green","black","this is the green color code ")}/>
                        </div>
                        <div className="box">
                            <Button color="red" text="code Red" onClick={() => this.changePopUp("red","black","this is the red color code ")}/>
                        </div>

                        <div className="box">
                            <Button color="Blue" text="code Blue" onClick={() => this.changePopUp("blue","white","this is the blue color code ")}/>
                        </div>

                    </div>
                    <div className="column">
                        <div className="box">
                            <Button color="yellow" text="code yellow" textColor="black" onClick={() => this.changePopUp("yellow","black","this is the yellow color code ")}/>
                        </div>
                        <div className="box">
                            <Button color="black" text="code Black" onClick={() => this.changePopUp("black","white","this is the black color code ")}/>
                        </div>
                        <div className="box">
                            <Button color="purple" text="code purple" onClick={() => this.changePopUp("purple","white","this is the purple color code ")}/>
                        </div>
                    </div>
                </div>
                    : null }
            </div>
            
        )
    }
}

export default ColorCode
