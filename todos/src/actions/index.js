import * as actionTypes from '../constants/ActionTypes'

export const addToDo = (value) => ({
    type: actionTypes.ADD_TO_DO,
    value: value
})

export const toggleToDo = (todoId) => ({
    type: actionTypes.TOGGLE_TO_DO,
    todoId: todoId
})

export const chooseFilter = (filterType) => ({
    type: actionTypes.CHOOSE_FILTER,
    filterType: filterType
})
