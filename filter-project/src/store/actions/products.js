import {
    SET_PRODUCTS
} from "../constants";


const setProucts = (data) => (dispatch) =>  {
        dispatch({
            type: SET_PRODUCTS,
            payload: data
        })
}

const filterProducts = (data) => (dispatch) => {

}

export {
    setProucts,
    filterProducts
}