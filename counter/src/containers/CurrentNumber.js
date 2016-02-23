import { connect } from 'react-redux'
import Number from '../components/Number'

const CurrentNumber = connect(
    (state) => ({
        text: state.counter
    }),
    null
)(Number)

export default CurrentNumber
