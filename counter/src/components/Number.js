import React, { PropTypes } from 'react'

const Number = ({ text }) => (
    <h1>
        {text}
    </h1>
)

Number.propTypes = {
    text: PropTypes.number.isRequired
}

export default Number
