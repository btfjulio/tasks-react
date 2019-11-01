import React, {Component} from 'react'
import Form from "./Form"
import Task from './Task'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks:[]
        };
        this.addTask = this.addTask.bind(this)
        this.remove = this.remove.bind(this)
    }
    remove(id) {
        this.setState(state => ({
            tasks: this.state.tasks.filter(task => task.id !== id )
        }))
    }
    addTask(task) {
        this.setState({
            tasks: [...this.state.tasks, task]
        })
    }
    render() {
        const list = this.state.tasks.map((task) => {
            return <Task key={task.id} name={task.name} removeTask={()=>this.remove(task.id)} />
        })
        return(
            <div>
                <ul>
                    {list}
                </ul>
                <Form createTask={this.addTask}/>
            </div>
        )
    }
}

export default TodoList