import React, { PropTypes } from 'react'
import ProductItem from './ProductItem'

const ProductList = ({ products, onProductClick }) => {
    const productKeys = Object.keys(products),
        empty = productKeys.length ? <p> Total: {productKeys.length} items.</p> : <p>No available products!</p>
    return (
        <div className="half">
            <h3>Available Products:</h3>
            {productKeys.map((productId) => (
                <ProductItem key={productId} {...products[productId]} onClick={() => (onProductClick(productId))} />
            ))}
            {empty}
        </div>
    )
}

ProductList.propTypes = {
    products: PropTypes.object.isRequired,
    onProductClick: PropTypes.func.isRequired
}

export default ProductList