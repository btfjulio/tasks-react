import React, {Component} from 'react'

class Task extends Component {
    render() {
        return(
            <div>
                <button onClick={this.props.removeTask}>X</button>
                <button>Edit</button>
                <li>
                    {this.props.name}
                </li>
            </div>
        )
    }
}

export default Task