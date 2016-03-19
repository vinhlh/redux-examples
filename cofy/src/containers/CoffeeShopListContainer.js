import { connect } from 'react-redux'
import CoffeeShopList from '../components/CoffeeShopList'
import { loadCoffeeShops } from '../actions'

const CoffeeShopListContainer = connect(
    (state, ownProps) => ({
        coffeeShops: state.coffeeShops
    }),
    (dispatch, ownProps) => ({
        fetchData() {
            dispatch(loadCoffeeShops())
        }
    })
)(CoffeeShopList)

export default CoffeeShopListContainer