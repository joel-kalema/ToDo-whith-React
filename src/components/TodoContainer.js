import React from "react"
import TodosList from "./TodosList";
import Header from "./Header"

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Learn React',
          completed: false,
        },
        {
          id: 2,
          title: 'Learn Redux',
          completed: false,
        },
        {
          id: 3,
          title: 'Learn React Router',
          completed: false,
        },
      ],
    };
    this.handleChange = this.handleChange.bind(this);
  }
  render() {
    return (
      <div>
        <Header />
        <TodosList todos={this.state.todos} />
      </div>
    )
  }
}
export default TodoContainer