import * as actionTypes from '../constants/ActionTypes'

const todoReducer = (todo = {}, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_DO:
            return {
                value: action.value,
                completed: false
            }
        case actionTypes.TOGGLE_TO_DO:
            return {
                ...todo,
                completed: !todo.completed
            }
        default:
            return todo
    }
}

const todosReducer = (todos = {}, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_DO:
            return {
                ...todos,
                [todos.incrementIndex]: todoReducer(null, action),
                incrementIndex: todos.incrementIndex + 1
            }
        case actionTypes.TOGGLE_TO_DO:
            return {
                ...todos,
                [action.todoId]: todoReducer(todos[action.todoId], action)
            }
        default:
            return todos
    }
}

const filterReducer = (filter = actionTypes.SHOW_ALL, action) => {
    switch (action.type) {
        case actionTypes.CHOOSE_FILTER:
            return action.filterType
        default:
            return filter
    }
}

const rootReducer = (state = {}, action) => {
    return {
        todos: todosReducer(state.todos, action),
        filter: filterReducer(state.filter, action)
    }
}

export default rootReducer
