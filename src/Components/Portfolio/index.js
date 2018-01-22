import React from "react";
import styles from "./style.css";
import Project from "../Project";
import projects from "../../static/json/projects.json";

export default () => {
  return (
    <div id={styles.portfolio}>
      <div className={styles["projects-container"]}>
        {projects.map(item => <Project key={item.id} project={item} />)}
      </div>
    </div>
  );
};
