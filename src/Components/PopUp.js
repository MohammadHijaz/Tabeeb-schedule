import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    popup : {  
        position: 'fixed',  
        width: '100%',  
        height: '100%',  
        top: '0',  
        left: '0',  
        right: '0',  
        bottom: '0',  
        margin: 'auto',  
        background: 'rgba(0,0,0, 0.5)',  
      },
      innerPopup : {
        position: 'absolute',  
        left: '25%',  
        right: '25%',  
        top: '25%',  
        bottom: '25%',  
        margin: 'auto',  
        borderradius: '20px',  
        background: 'white',
      },
  }); 
export default function Hook(props) {
    const classes = useStyles();
    return (
        <div className={classes.popup}>
            <div className={classes.innerPopup} style={{backgroundColor : props.background}}>
                <h1 style={{position : "absolute",top : -5, color : props.color}}>{props.title}</h1>
                <br></br> <br></br>
                <span style={{color : props.color}}>{props.text}</span>
                <button onClick={props.close} style={{position : "absolute",top : 450, left : 0}}>close</button>
            </div>

        </div>
    )
}