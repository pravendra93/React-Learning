import {
    SET_PRODUCTS
} from "../constants"
const initialState = {
    products:[]
}
const productReducer = (state=initialState, action) => {
    switch(action.type) {

        case SET_PRODUCTS: {
            return {
              products: action.payload
            }
        }
        default: {
            return state;
        }
    }
}


export default productReducer;