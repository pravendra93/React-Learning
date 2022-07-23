import {
    SET_PRODUCTS,
    ADD_TO_CART
} from "../constants"
const initialState = {
    products:[],
    carts:[]
}
const productReducer = (state=initialState, action) => {
    switch(action.type) {

        case SET_PRODUCTS: {
            return {
             ...state,
              products: action.payload
            }
        }
        case ADD_TO_CART: {
            return {
                ...state,
                carts:[...state.carts, action.payload]
            }
        }
        default: {
            return state;
        }
    }
}


export default productReducer;