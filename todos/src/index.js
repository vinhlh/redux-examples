import React from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import Root from './containers/Root'
import * as filterTypes from './constants/FilterTypes'

const store = configureStore({
    todos: {
        incrementIndex: 0
    },
    filter: filterTypes.SHOW_ALL
})

render(
    <Root store={store}/>,
    document.getElementById('root')
);
