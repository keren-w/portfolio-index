import React, { Component } from "react";
import styles from "./style.css";
import Tag from "../Tag";

export default class Project extends Component {
  constructor() {
    super();
    this.state = { showPreview: false };
    this.toggleProjectPreview = this.toggleProjectPreview.bind(this);
    this.projectPreview = this.projectPreview.bind(this);
  }

  toggleProjectPreview() {
    let currentlyPreviewing = this.state.showPreview;
    this.setState({ showPreview: !currentlyPreviewing });
  }

  projectPreview() {
    let { item } = this.props;
    return (
      <div className={styles["project-modal-container"]}>
        <div className={styles["project-modal"]}>
          <a href={item["link-address"]}>
            <h3 className={styles["project-title"]}>{item.title}</h3>
          </a>
          <p>{item.description}</p>
          <div className={styles["tags-container"]}>
            {displayTags(item.technologies)}
          </div>
          <p>
            <span>Go to repository</span>
          </p>
        </div>
      </div>
    );
  }
  render() {
      let { item, isViewed } = this.props;

      if (isViewed) {
          return <div className={styles["projects-explained"]} name={item.title}>
          <ProjectTitle project={this.props.item} />
        </div>
      } else {
          return null;
      }
  }
}

const ProjectTitle = ({ project }) => {
  return <h3 className={styles["project-title"]}>{project.title}</h3>;
};

const displayTags = tagsArray => {
  return tagsArray.map((tag, index) => <Tag key={index} tagContent={tag} />);
};
