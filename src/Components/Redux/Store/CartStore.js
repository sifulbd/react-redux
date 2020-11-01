const { createStore } = require("redux");
const { default: cartReducers } = require("../Reducers/CartReducer");

const store = createStore(cartReducers);
export default store;