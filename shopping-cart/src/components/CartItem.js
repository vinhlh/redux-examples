import React, { PropTypes } from 'react'

const CartItem = ({ name, price, amount }) => (
    <div>
        <b>{name}</b> - <i>{price}$</i> x {amount} item(s)
    </div>
)

CartItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired
}

export default CartItem