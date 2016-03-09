import React, { PropTypes } from 'react'
import Button from './Button'

const ProductItem = ({ name, price, onClick }) => (
    <div className="product-item">
        <h4>{name}</h4>
        <div>Price: {price}$</div>
        <Button onClick={onClick} text="Add to cart" />
    </div>
)

ProductItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
}

export default ProductItem