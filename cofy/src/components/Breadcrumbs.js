import React, { PropTypes } from 'react'
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

let Breadcrumbs = ({ routes }) => (
    <div>
        <Breadcrumb>
        {
            routes.map((item, index) => {
                let isActive = index >= routes.length - 1
                return (
                    <LinkContainer active={isActive} disabled={isActive} key={index} to={item.path || ''}>
                        <BreadcrumbItem>{item.component.title}</BreadcrumbItem>
                    </LinkContainer>
                )
            })
        }
        </Breadcrumb>
    </div>
)

Breadcrumbs.propTypes = {
    routes: PropTypes.array.isRequired
}

export default Breadcrumbs