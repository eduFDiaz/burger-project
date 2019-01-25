import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/AuxHoc';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    // Inline style was added to hide/show the modal depending
    // on the value of the show prop, check the Builder
    <Aux>
        <Backdrop show={props.show} clicked={ props.modalClosed }/>
        <div
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0',
            }}
            className={classes.Modal}>
            {props.children}
        </div>
    </Aux>
);

export default modal;