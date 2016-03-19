import React, { PropTypes, Component } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import routes from '../routes'

const Root = ({ store, history }) => (
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>
)

Root.PropTypes = {
    store: PropTypes.object.isRequired
}

export default Root
