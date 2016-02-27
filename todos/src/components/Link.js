import React, { PropTypes } from 'react'

const Link = ({ text, className, onClick }) => (
    <a href="#" className={className} onClick={(e) => {
        e.preventDefault();
        onClick(e);
    }}>
        {text}
    </a>
)

Link.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default Link
