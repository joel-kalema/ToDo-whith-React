import React from "react"

class TodoItem extends React.Component {
  state = {
    editing: false,
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    })
  }

  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }

    let viewMode = {}
let editMode = {}

if (this.state.editing) {
  viewMode.display = "none"
} else {
  editMode.display = "none"
}

    return(
      <li>
        <div div onDoubleClick={this.handleEditing} style={viewMode}>
        <input
        type="checkbox"
        checked={this.props.todo.completed}
        onChange={() => this.props.handleChangeProps(this.props.todo.id)}
      /> 
      <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
        Delete
      </button>
      <span style={this.props.todo.completed ? completedStyle : null}>
         {this.props.todo.title}
      </span>
        </div>
        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          value={title}
/>
      </li>
    )
  }
}

export default TodoItem