import React from 'react'
import { connect } from 'react-redux'
import ListItem from '../components/ListItem'
import { toggleToDo } from '../actions'

const TodoItem = connect(
    (state, ownProps) => ({
        text: ownProps.value,
        className: ownProps.completed ? 'completed' : ''
    }),
    (dispatch, ownProps) => ({
        onClick: () => {
            dispatch(toggleToDo(ownProps.id))
        }
    })
)(ListItem)

export default TodoItem
