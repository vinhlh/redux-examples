import React from 'react'
import { Link } from 'react-router'

const CoffeeShop = ({ id, name, address }) => (
    <Link to={`/coffee-shop/${name.replace(/ /g, '-').toLowerCase()}/${id}`}>
        <h5>{name}</h5>
        <p>{address}</p>
    </Link>
)

export default CoffeeShop