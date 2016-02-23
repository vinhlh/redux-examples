import { connect } from 'react-redux'
import Button from '../components/Button'
import { decrement } from '../actions'

const DecrementButton = connect(
    () => ({
        text: '-'
    }),
    (dispatch) => ({
        onClick: () => {
            dispatch(decrement())
        }
    })
)(Button)

export default DecrementButton
