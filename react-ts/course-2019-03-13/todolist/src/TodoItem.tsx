import React, { memo, Component } from 'react';
import TodoType from './TodoType';

import './TodoItem.css';

type TodoItemProps = {
  todo: TodoType;
  onCompleted: () => void;
};

class TodoItem extends Component<TodoItemProps, {}> {

  shouldComponentUpdate(newProps: TodoItemProps) {
    return this.props.todo !== newProps.todo;
  }

  render = () => {
    return (
      <div
        className={this.props.todo.completed ? 'todo completed' : 'todo'}
        onClick={() => {
          this.props.onCompleted();
        }}
      >
        {this.props.todo.completed ? 'DONE:' : 'TODO:'} {this.props.todo.title}
      </div>
    );
  };
}

export default TodoItem;
