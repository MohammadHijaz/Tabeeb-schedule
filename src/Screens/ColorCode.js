
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
                            <Button color ="#bbeaa6"  text="code Green" onClick={() => this.changePopUp("#bbeaa6" ,"black","this is the green color code ")}/>
                        </div>
                        <div className="box">
                            <Button color="#ff8080" text="code Red" onClick={() => this.changePopUp("#ff8080","black","this is the red color code ")}/>
                        </div>

                        <div className="box">
                            <Button color="#60a9a6" text="code Blue" onClick={() => this.changePopUp("#60a9a6","white","this is the blue color code ")}/>
                        </div>

                    </div>
                    <div className="column">
                        <div className="box">
                            <Button color="#f0f696" text="code yellow" textColor="black" onClick={() => this.changePopUp("#f0f696","black","this is the yellow color code ")}/>
                        </div>
                        <div className="box">
                            <Button color="#52524e" text="code Black" onClick={() => this.changePopUp("#52524e","white","this is the black color code ")}/>
                        </div>
                        <div className="box">
                            <Button color="#cca8e9" text="code purple" onClick={() => this.changePopUp("#cca8e9","white","this is the purple color code ")}/>
                        </div>
                    </div>
                </div>
                    : null }
            </div>
            
        )
    }
}

export default ColorCode
