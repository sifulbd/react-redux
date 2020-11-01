const { ADD_TO_CART, REMOVE_FROM_CART } = require("../Actions/CartAction")

const initialState = {
    cart: []
}

const cartReducers = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART: 
        const newId = action.id;
        const newcart = [...state.cart, newId];        
            return {
                cart: newcart
            }
        case REMOVE_FROM_CART: 
            const id = action.id;
            const remainingCart = state.cart.filter(item => item !== id);
            return {
                cart: remainingCart
            }
        default: 
        return state;
    }
}

export default cartReducers;