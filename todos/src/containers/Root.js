import React, { PropTypes, Component } from 'react'
import { Provider } from 'react-redux'
import TodoApp from '../components/TodoApp'

const Root = ({ store }) => (
    <Provider store={store}>
        <div>
            <TodoApp />
        </div>
    </Provider>
)

Root.PropTypes = {
    store: PropTypes.object.isRequired
}

export default Root
