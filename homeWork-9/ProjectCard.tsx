import React from "react";
import { IProject } from "../types";

interface IProjectCardProps {
  project: IProject;
  onClick: (id: number) => void;
  id: number;
}

export class ProjectCardProps extends React.Component<IProjectCardProps> {
  render() {
    return (
      <div
        style={{
          backgroundColor: this.props.project.important ? "red" : "green"
        }}
        onClick={() => this.props.onClick(this.props.project.id)}
      >
        {this.props.project.text}
      </div>
    );
  }
}
