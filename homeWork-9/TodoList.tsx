import React from "react";
import { ITodo } from "../types";
import { TodoCard } from "../components/TodoCard";

interface ITodoListProps {
  todos: ITodo[];
  deleteCallback: (id: number) => void;
}
export class TodoList extends React.Component<ITodoListProps> {
  render() {
    return (
      <div
        style={{
          paddingLeft: 40,
          paddingTop: 30
        }}
      >
        <div>Список</div>
        {this.props.todos.map((todo) => {
          return (
            <div key={todo.id}>
              <TodoCard
                todo={todo}
                deleteCallback={this.props.deleteCallback}
                id={this.props.todos.indexOf(todo)}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
