import React, { PropTypes, Component } from 'react'
import { Provider } from 'react-redux'
import CounterApp from '../components/CounterApp'
import DevTools from './DevTools'

const Root = ({ store }) => (
    <Provider store={store}>
        <div>
            <CounterApp />
            <DevTools />
        </div>
    </Provider>
)

Root.PropTypes = {
    store: PropTypes.object.isRequired
}

export default Root
