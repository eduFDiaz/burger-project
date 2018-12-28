import React, { Component } from "react";
import Aux from '../../hoc/AuxHoc';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  render() {
    return (
        <Aux>
            <div><Burger /></div>
            <div>Build Controls</div>
        </Aux>
    );
  }
}

export default BurgerBuilder;