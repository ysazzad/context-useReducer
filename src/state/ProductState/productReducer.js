import { actionTypes } from "./actionTypes";

export const initialState = {
    loading: false,
    products: [],
    errors: false,
    cart: []

}

export const productReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.FETCHING_START:
            return {
                ...state,
                loading: true,
                errors: false
            }
        case actionTypes.FETCHING_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
                errors: false
            }
        case actionTypes.FETCHING_ERROR:
            return {
                ...state,
                loading: false,
                errors: true
            }
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        default:
            return state;
    }
}