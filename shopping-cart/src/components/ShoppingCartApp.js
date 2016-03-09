import React from 'react'
import ProductContainer from '../containers/ProductContainer'
import CartContainer from '../containers/CartContainer'
import StatusMessage from '../containers/StatusMessage'

const ShoppingCartApp = () => (
    <div>
        <StatusMessage />
        <ProductContainer />
        <CartContainer />
    </div>
)

export default ShoppingCartApp
