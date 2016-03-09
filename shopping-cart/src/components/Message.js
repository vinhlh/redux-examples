import React, { PropTypes } from 'react'

const Message = ({ message }) => (
    <div id="message">
        { message }
    </div>
)

Message.propTypes = {
    message: PropTypes.string
}

export default Message