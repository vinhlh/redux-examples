import React from 'react'
import { connect } from 'react-redux'
import CoffeeShopDetail from '../components/CoffeeShopDetail'
import { loadCoffeeShopDetail } from '../actions'

const CoffeeShopDetailContainer = connect(
    (state, props) => ({
        ...state.coffeeShotDetail
    }),
    (dispatch, ownProps) => ({
        fetchData() {
            dispatch(loadCoffeeShopDetail(ownProps.params.id))
        }
    })
)(CoffeeShopDetail)

export default CoffeeShopDetailContainer