import React, { PropTypes } from 'react'
import CartItem from './CartItem'
import CheckoutButton from '../containers/CheckoutButton'
import TotalPrice from './TotalPrice'

const CartList = ({ items, totalPrice }) => {
    const itemKeys = Object.keys(items),
        empty = itemKeys.length ? null : <p>No available items!</p>
    return (
        <div className="half">
            <h3>Your cart:</h3>
            {itemKeys.map((itemKey) => (
                <CartItem key={itemKey} {...items[itemKey]} />
            ))}
            {empty}

            <TotalPrice price={totalPrice}$ />
            <CheckoutButton />
        </div>
    )
}

CartList.propTypes = {
    items: PropTypes.object.isRequired,
    totalPrice: PropTypes.number.isRequired
}

export default CartList