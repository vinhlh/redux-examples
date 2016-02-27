import TodoList from '../components/TodoList'
import { connect } from 'react-redux'
import * as filterTypes from '../constants/FilterTypes'

const filterTodoList = (todos, filter) => {
    let visibleTodos = [];
    Object.keys(todos).forEach(function(todoId) {
        if (Number.isInteger(Number.parseInt(todoId))) {
            const todo = todos[todoId];
            if (filter == filterTypes.SHOW_ALL
                || (filter == filterTypes.SHOW_COMPLETED && todo.completed)
                || (filter == filterTypes.SHOW_ACTIVE && !todo.completed)) {
                visibleTodos.push({
                    ...todo,
                    id: todoId
                })
            }
        }
    })

    return visibleTodos
}

const VisibleTodoList = connect(
    (state, ownProps) => ({
        todos: filterTodoList(state.todos, state.filter)
    })
)(TodoList)

export default VisibleTodoList