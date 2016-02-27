import { connect } from 'react-redux'
import TextInput from '../components/TextInput'
import { addToDo } from '../actions'

const AddToDoInput = connect(
    null,
    (dispatch, ownProps) => ({
        onSubmit: (value) => {
            dispatch(addToDo(value))
        }
    })
)(TextInput)

export default AddToDoInput