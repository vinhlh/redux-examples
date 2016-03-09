import { connect } from 'react-redux'
import Message from '../components/Message'

const StatusMessage = connect(
    (state, ownProps) => ({
        message: state.message
    })
)(Message)

export default StatusMessage