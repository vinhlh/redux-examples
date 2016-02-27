import React, { PropTypes } from 'react'

const ListItem = ({ text, className, onClick }) => (
    <li className={className} onClick={onClick}>
        {text}
    </li>
)

ListItem.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired
}

export default ListItem
