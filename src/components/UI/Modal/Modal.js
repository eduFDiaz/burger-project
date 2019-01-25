import React from 'react';
import classes from './Modal.css';

const modal = (props) => (
    // Inline style was added to hide/show the modal depending
    // on the value of the show prop, check the Builder
    <div 
    style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)' ,
        opacity : props.show ? '1' : '0' ,
     }}
     className={classes.Modal}>
        {props.children}
    </div>
);

export default modal;