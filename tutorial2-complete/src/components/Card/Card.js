//imports react to use react functionality and css module for styling
import React from 'react';
import classes from './Card.module.css'
//list of colors
const colors = ['red','blue','green','yellow'];
//functional card component 
const card = (props) => (     
    /*creates a new div with styling of base card class and additional styling passed 
    in from props to select color class then joins them together into one string*/
    <div className = {[classes.Card,classes[colors[props.colorNo]]].join(' ') } >
        {/*displays name of color*/}
        {colors[props.colorNo]}
    </div>
);

export default card;