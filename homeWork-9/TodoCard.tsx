import React from "react";
import { ITodo } from "../types";

interface TodoCardProps {
  todo: ITodo;
  deleteCallback: (id: number) => void;
  id: number;
}

export class TodoCard extends React.Component<TodoCardProps> {
  render() {
    return (
      <div className="todoCard">
        {this.props.todo.text}
        <button
          className="delete_todo"
          onClick={() => {
            return this.props.deleteCallback(this.props.id);
          }}
        >
          <b>X</b>
        </button>
      </div>
    );
  }
}
