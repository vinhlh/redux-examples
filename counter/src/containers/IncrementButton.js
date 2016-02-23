import { connect } from 'react-redux'
import Button from '../components/Button'
import { increment } from '../actions'

const IncrementButton = connect(
    () => ({
        text: '+'
    }),
    (dispatch) => ({
        onClick: () => {
            dispatch(increment())
        }
    })
)(Button)

export default IncrementButton
