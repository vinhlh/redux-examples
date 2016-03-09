import * as actionTypes from '../constants/ActionTypes'

const productReducer = (state = {}, action) => {
    switch(action.type) {
        case actionTypes.LOAD_PRODUCTS_SUCCESS:
            return action.data
        default:
            return state
    }
}

const cartReducer = (state = {}, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                [action.productId]: typeof state[action.productId] !== 'undefined' ? state[action.productId] + 1 : 1
            }
        case actionTypes.CHECKOUT_SUCCESS:
            return {}
        default:
            return state
    }
}

const messageReducer = (state = '', action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
        case actionTypes.DISPLAY_MESSAGE:
            return action.message
        default:
            return state
    }
}

const rootReducer = (state = {}, action) => ({
    products: productReducer(state.products, action),
    cart    : cartReducer(state.cart, action),
    message : messageReducer(state.message, action)
})



export default rootReducer
