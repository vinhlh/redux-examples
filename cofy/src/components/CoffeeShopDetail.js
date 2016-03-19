import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const CoffeeShopDetail = React.createClass({
    propTypes: {
        name: PropTypes.string,
        address: PropTypes.string,
        description: PropTypes.string,
        fetchData: PropTypes.func.isRequired,
    },
    componentWillMount() {
        this.props.fetchData()
    },
    render() {
        const { name, address, description } = this.props
        return (
            <div>
                <h5>{name}</h5>
                <p>{address}</p>
                <p>{description}</p>
            </div>
        )
    }
})

CoffeeShopDetail.title = 'Coffee Shop Detail'
CoffeeShopDetail.path = '/coffee-shop/:name/:id'

export default CoffeeShopDetail