import React, { PropTypes, Component } from 'react'
import { Provider } from 'react-redux'
import ShoppingCartApp from '../components/ShoppingCartApp'

const Root = ({ store }) => (
    <Provider store={store}>
        <div>
            <ShoppingCartApp />
        </div>
    </Provider>
)

Root.PropTypes = {
    store: PropTypes.object.isRequired
}

export default Root
