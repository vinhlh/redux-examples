import React, { PropTypes, Component } from 'react'
import ReactDOM from 'react-dom'

class TextInput extends Component {
    componentDidMount() {
        ReactDOM.findDOMNode(this.refs.todoInput).focus()
    }

    onKeyDown(e) {
        if (e.which == 13) {
            this.props.onSubmit(this.refs.todoInput.value)
            this.refs.todoInput.value = ''
        }
    }

    render() {
        return (
            <input
                onKeyDown={ this.onKeyDown.bind(this) }
                type="text"
                ref="todoInput"
                placeholder="Add ToTo"
            />
        )
    }
}

TextInput.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default TextInput
