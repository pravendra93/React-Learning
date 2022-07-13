import { combineReducers } from "redux";
import productReducer from "./products";
const appReducer = combineReducers({
    product: productReducer
});

export default appReducer;