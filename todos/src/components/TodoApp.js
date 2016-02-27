import React from 'react'
import AddToDoInput from '../containers/AddToDoInput'
import VisibleTodoList from '../containers/VisibleTodoList'
import FilterList from '../components/FilterList'

const TodoApp = () => (
    <div>
        <AddToDoInput />
        <VisibleTodoList />
        <FilterList />
    </div>
)

export default TodoApp
