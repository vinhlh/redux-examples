import Button from '../components/Button'
import { connect } from 'react-redux'
import { checkout } from '../actions'

const CheckoutButton = connect(
    (state, ownProps) => ({
        text: 'Checkout'
    }),
    (dispatch, ownProps) => ({
        onClick: () => {
            dispatch(checkout())
        }
    })
)(Button)

export default CheckoutButton