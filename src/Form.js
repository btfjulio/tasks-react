import React, {Component} from 'react'
import uuid from 'uuid/v4'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleSubmit(evt) {
        evt.preventDefault();
        const newTask = {name: this.state.name, id: uuid()}
        this.props.createTask(newTask)
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Task:</label>
                        <input 
                            id="name" 
                            placeholder="New task"
                            name="name" 
                            type="text" 
                            value={this.state.name} 
                            onChange={this.handleChange}
                        />
                    </div>
                    <button>Add New Task</button>
                </form>
            </div>
        )
    }
}

export default Form