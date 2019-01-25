import React from 'react';
import Aux from '../../../hoc/AuxHoc';
import Button from '../../../components/UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
        });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelledHandler}>CANCEL</Button>
            <Button  btnType="Success" clicked={props.purchaseContinuedHandler}>CONTINUE</Button>
        </Aux>
    );
};

export default orderSummary;