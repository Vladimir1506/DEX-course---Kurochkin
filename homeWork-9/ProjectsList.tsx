import React from "react";
import { IProject } from "../types";
import { ProjectCardProps } from "../components/ProjectCard";

interface IProjectsListProps {
  projects: IProject[];
  onClick: (id: number) => void;
}

export class ProjectsList extends React.Component<IProjectsListProps> {
  render() {
    return (
      <div>
        {this.props.projects.map((project) => {
          return (
            <div key={project.id}>
              <ProjectCardProps
                project={project}
                onClick={this.props.onClick}
                id={project.id}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
