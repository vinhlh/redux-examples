import React, { PropTypes } from 'react'
import AppHeader from '../containers/AppHeader'
import { Grid, Row, Col } from 'react-bootstrap'

const App = ({ routes, children }) => (
    <div>
        <Grid>
            <Row>
                <Col md={12}>
                    <AppHeader routes={routes} />
                    {children}
                </Col>
            </Row>
        </Grid>
    </div>
)

App.title = 'Home'
App.path = '/'

export default App
