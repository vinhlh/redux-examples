import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import CoffeeShopDetailContainer from './containers/CoffeeShopDetailContainer'
import Home from './components/Home'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/coffee-shop/:name/:id" component={CoffeeShopDetailContainer} />
    </Route>
)
