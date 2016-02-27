import React, { PropTypes } from 'react'
import TodoItem from '../containers/ToDoItem'

const TodoList = ({ todos }) => {
    let empty = !todos.length ? <p>No available items</p> : null;

    return (
        <div>
            <h3>Todo List:</h3>
            <ul>
                {todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
            </ul>

            {empty}
        </div>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
}

export default TodoList