import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import * as actionTypes from '../constants/ActionTypes'

const pageHeader = (state = 'Home', action) => {
    switch(action.type) {
        case actionTypes.LOAD_COFFEESHOP_DETAIL_SUCCESS:
            return action.data.name
        case actionTypes.LOAD_COFFEESHOPS_SUCCESS:
            return 'Home'
        default:
            return state
    }
}

const coffeeShops = (state = {}, action) => {
    switch(action.type) {
        case actionTypes.LOAD_COFFEESHOPS_SUCCESS:
            return action.data
        default:
            return state
    }
}

const coffeeShotDetail = (state = {}, action) => {
    switch(action.type) {
        case actionTypes.LOAD_COFFEESHOP_DETAIL_SUCCESS:
            return action.data
        default:
            return state
    }
}

const rootReducer = combineReducers({
    coffeeShops,
    coffeeShotDetail,
    routing,
    pageHeader
})

export default rootReducer
