import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    popup: {
        display: "flex",
        flexDirection: "column",
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
    innerPopup: {
        display: "flex",
        flexDirection: "column",
        position: 'absolute',
        left: '25%',
        right: '25%',
        top: '25%',
        bottom: '25%',
        margin: 'auto',
        borderradius: '20px',
        background: 'white',
    },
    button: {
        width: "10%",
        marginTop: "21em",
        marginLeft: "1em"
    }
});
export default function Hook(props) {
    const classes = useStyles();
    return (
        <div className={classes.popup}>
            <div className={classes.innerPopup} style={{ backgroundColor: props.background }}>
                <h1 style={{ color: props.color }}>{props.title}</h1>
                <span style={{ color: props.color }}>{props.text}</span>
                <button onClick={props.close} className={classes.button}>close</button>
            </div>

        </div>
    )
}