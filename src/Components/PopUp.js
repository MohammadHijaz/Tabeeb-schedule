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
            <div className={classes.innerPopup}>
                <h1>{props.text}</h1>
                <button onClick={props.close}>close</button>
            </div>

        </div>
    )
}