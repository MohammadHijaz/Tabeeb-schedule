import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles({
  button: {
    background : 'blue',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 40,
    padding: '0 50px',
    width:'100%'
  },
});

export default function Hook(props) {
  const classes = useStyles();
  return ( 
  <Button 
    className={classes.button}
    onClick ={props.onClick}
    style={{background : props.color , color : props.textColor }}
    >
    {props.text}
  </Button>
  )
}