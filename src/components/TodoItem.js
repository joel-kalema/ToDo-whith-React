/* eslint-disable no-console */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React from 'react';
import styles from './TodoItem.module.css';

// eslint-disable-next-line react/prefer-stateless-function
class TodoItem extends React.Component {
  state = {
    editing: false,
  }

  handleEditing = () => {
    console.log('edit mode activated');
  }

  render() {
    const viewMode = {};
    const editMode = {};

    if (this.state.editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };
    const { completed, id, title } = this.props.todo;
    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={() => this.props.handleChangeProps(id)}
          />
          <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
          <span style={completed ? completedStyle : null}>{title}</span>
        </div>
        <input type="text" style={editMode} className={styles.textInput} />

      </li>
    );
  }
}

export default TodoItem;
