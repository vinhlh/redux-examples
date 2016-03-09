import * as actionTypes from '../constants/ActionTypes'
import FakeApi from '../api/FakeApi'

export const loadProducts = () => {
    return (dispatch) => {
        FakeApi.loadProducts((response) => {
            if (response.success) {
                dispatch(loadProductsSuccess(response.data))
                dispatch(displayMessage('Loading products success!'))
            } else {
                dispatch(loadProductsFailure())
                dispatch(displayMessage('Loading products failure!'))
            }
        })
    }
}

export const loadProductsSuccess = (products) => ({
    type: actionTypes.LOAD_PRODUCTS_SUCCESS,
    data: products
})

export const loadProductsFailure = () => ({
    type: actionTypes.LOAD_PRODUCTS_FAILURE
})

export const addToCart = (productId) => ({
    type: actionTypes.ADD_TO_CART,
    productId: productId
})

export const checkout = () => {
    return (dispatch, getState) => {
        const { cart } = getState()
        FakeApi.checkout(cart, (response) => {
            if (response.success) {
                dispatch(checkoutSuccess(response.data))
                dispatch(displayMessage('Checkout success!'))
            } else {
                dispatch(checkoutFailure())
                dispatch(displayMessage('Checkout failure!'))
            }
        })
    }
}

export const checkoutSuccess = (products) => ({
    type: actionTypes.CHECKOUT_SUCCESS,
    products: products
})

export const checkoutFailure = (products) => ({
    type: actionTypes.CHECKOUT_FAILURE,
    products: products
})

export const displayMessage = (message) => ({
    type: actionTypes.DISPLAY_MESSAGE,
    message: message
})