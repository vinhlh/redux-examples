import * as actionTypes from '../constants/ActionTypes'
import FakeApi from '../api/FakeApi'

export const loadCoffeeShops = () => {
    return (dispatch) => {
        FakeApi.loadCoffeeShops((response) => {
            if (response.success) {
                dispatch(loadCoffeeShopsSuccess(response.data))
            } else {
                dispatch(loadCoffeeShopsFailure())
            }
        })
    }
}

export const loadCoffeeShopDetail = (id) => {
    return (dispatch) => {
        FakeApi.loadCoffeeShopDetail(id, (response) => {
            if (response.success) {
                dispatch(loadCoffeeShopDetailSuccess(response.data))
            } else {
                dispatch(loadCoffeeShopDetailFailure())
            }
        })
    }
}

export const loadCoffeeShopsSuccess = (coffeeShops) => ({
    type: actionTypes.LOAD_COFFEESHOPS_SUCCESS,
    data: coffeeShops
})

export const loadCoffeeShopsFailure = () => ({
    type: actionTypes.LOAD_COFFEESHOPS_FAILURE
})

export const loadCoffeeShopDetailSuccess = (coffeeShopDetail) => ({
    type: actionTypes.LOAD_COFFEESHOP_DETAIL_SUCCESS,
    data: coffeeShopDetail
})

export const loadCoffeeShopDetailFailure = () => ({
    type: actionTypes.LOAD_COFFEESHOP_DETAIL_FAILURE
})
