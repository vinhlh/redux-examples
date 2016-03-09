import React, { PropTypes } from 'react'
import ProductList from '../components/ProductList'
import { addToCart } from '../actions'
import { connect } from 'react-redux'

const ProductContainer = connect(
    (state, ownProps) => {
        console.log(state)
        return {
            products: state.products
        }
    },
    (dispatch, ownProps) => ({
        onProductClick: (productId) => {
            dispatch(addToCart(productId))
        }
    })
)(ProductList)

export default ProductContainer