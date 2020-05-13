
import React, { Component } from 'react';
import Button from '../Components/Button';
import PopUp from '../Components/PopUp';
import '../css/ColorCode.css'
class ColorCode extends Component {
    state = {
        showPopUp : false,
    }
    changePopUp = () => {
        this.setState({showPopUp : !this.state.showPopUp})
    }
    render() {
        return (

            <div>
                 {this.state.showPopUp ?
                    <PopUp
                        text="anything"
                        close={this.changePopUp.bind(this)}
                    />
                    : null
                }
                {!this.state.showPopUp ?
                 <div className="container22">
                    <div className="column">
                        <div className="box">
                            <Button color ="green" text="code Green" onClick={this.changePopUp.bind(this)}/>
                        </div>
                        <div className="box">
                            <Button color="red" text="code Red"/>
                        </div>

                        <div className="box">
                            <Button color="Blue" text="code Blue"/>
                        </div>

                    </div>
                    <div className="column">
                        <div className="box">
                            <Button color="yellow" text="code yellow" textColor="black"/>
                        </div>
                        <div className="box">
                            <Button color="black" text="code Black"/>
                        </div>
                        <div className="box">
                            <Button color="purple" text="code purple"/>
                        </div>
                    </div>
                </div>
                    : null }
            </div>
            
        )
    }
}

export default ColorCode
