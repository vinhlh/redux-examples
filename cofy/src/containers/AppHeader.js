import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'

const AppHeader = connect(
    (state, ownProps) => ({
        ...ownProps,
        title: state.pageHeader
    })
)(Header)

export default AppHeader