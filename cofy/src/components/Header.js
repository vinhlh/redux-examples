import React, { PropTypes } from 'react'
import { Grid, Row, Col, PageHeader } from 'react-bootstrap'
import Breadcrumbs from './Breadcrumbs'

const Header = ({ title, routes }) => (
    <div>
        <Breadcrumbs routes={routes} />
        <PageHeader>{title}</PageHeader>
    </div>
)

Header.propTypes = {
    title: PropTypes.string.isRequired,
    routes: PropTypes.array.isRequired
}

export default Header