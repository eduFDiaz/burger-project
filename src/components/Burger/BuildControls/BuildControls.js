import React from "react";
import classes from "./BuildControls.css";

import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const BuildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
        {controls.map((ctlr) => {
            return <BuildControl 
            key={ctlr.label} 
            label={ctlr.label} 
            type={ctlr.type}
            added={() => props.ingredientAdded(ctlr.type)}
            removed={() => props.ingredientRemoved(ctlr.type)}
            disabled={props.disabled[ctlr.type]}/>;
        })}
        <button disabled={!props.purchaseable} className={classes.OrderButton}>ORDER NOW</button>
    </div>
);
export default BuildControls;
