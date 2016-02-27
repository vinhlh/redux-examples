import Link from '../components/Link'
import { connect } from 'react-redux'
import { chooseFilter } from '../actions'

const Filter = connect(
    (state, ownProps) => ({
        className: state.filter == ownProps.type ? 'active' : ''
    }),
    (dispatch, ownProps) => ({
        onClick: () => {
            dispatch(chooseFilter(ownProps.type))
        }
    })
)(Link)

export default Filter
