import React from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import Root from './containers/Root'
import * as filterTypes from './constants/FilterTypes'

import { loadProducts } from './actions'


const store = configureStore({
    products: {},
    cart: {},
    message: ''
})

store.dispatch(loadProducts())

render(
    <Root store={store}/>,
    document.getElementById('root')
)