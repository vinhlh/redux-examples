import React, { PropTypes } from 'react'
import CartList from '../components/CartList'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
    let results = {},
        totalPrice = 0
    Object.keys(state.cart).forEach(function(productId) {
        results[productId] = {
            ...state.products[productId],
            amount: state.cart[productId]
        }

        totalPrice += state.products[productId].price * results[productId].amount
    })

    return {
        items: results,
        totalPrice: totalPrice
    }
}

const CartContainer = connect(
    mapStateToProps,
    null
)(CartList)

export default CartContainer