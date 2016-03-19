import React, { PropTypes } from 'react'
import CoffeeShop from './CoffeeShop'

const CoffeeShopList = React.createClass({
    propTypes: {
        coffeeShops: PropTypes.object.isRequired,
        fetchData: PropTypes.func.isRequired,
    },
    componentWillMount() {
        this.props.fetchData()
    },
    render() {
        const { coffeeShops } = this.props
        return (
            <div>
                <h2>Coffee Shops </h2>
                <ul>
                    {Object.keys(coffeeShops).map((coffeeShopsId, index) =>
                        <CoffeeShop
                            key={coffeeShopsId}
                            id={coffeeShopsId}
                            {...coffeeShops[coffeeShopsId]} />
                    )}
                </ul>
            </div>
        )
    }
})

export default CoffeeShopList