import React, { Component } from "react";
import Aux from '../../hoc/AuxHoc';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
            salad: 0.5,
            bacon: 0.7,
            cheese: 0.4,
            meat: 1.3
}
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false
    }

    updatePurchaseState(ingredients) {
        //The ingredients are checked so we can disable the order now button
        const sum = Object.keys(ingredients)
            .map(igKey => {
                //the value of every ingredient is returned
                //instead of the label, see ingredients state above
                return ingredients[igKey];
            }).reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({ purchaseable: sum > 0 });
    }

    addIngredientHandler = (type) => {
        //This method adds a new ingredient and updates the total price
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
        this.updatePurchaseState(updatedIngredients) ;
    }

    removeIngredientHandler = (type) => {
        //This method removes an ingredient and updates the total price
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;
        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
        this.updatePurchaseState(updatedIngredients) ;
    }

    purchaseHandler = () => {
        //This method updates purchasing which is used
        //to show/hide the order summary modal
        this.setState({ purchasing: true });
    }

    purchaseCancelHandler = () => {
        //This method cancel the purchasing which is used
        //to show/hide the backdrop
        this.setState({ purchasing: false });
    }

    render() {
        // We chech that there are actually items added to the burger
        // otherwise we'd be tring to access to a negative element 
        // in the array ingredients in the Burger component
        // we pass a disable bool arrary prop to the build control
        const disableInfo = {...this.state.ingredients};
        for (let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0;
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disableInfo}
                    price={this.state.totalPrice}
                    purchaseable={this.state.purchaseable}
                    ordered={this.purchaseHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;