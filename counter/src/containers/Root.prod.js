import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import CounterApp from '../components/CounterApp'

const Root = ({ store }) => (
    <Provider store={store}>
        <CounterApp />
    </Provider>
)

Root.PropTypes = {
    store: PropTypes.object.isRequired
}

export default Root