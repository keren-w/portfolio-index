import React from "react";
import styles from "./style.css";
import Project from "../Project";
import projects from "../../static/json/projects.json";
import SectionTitle from "../SectionTitle";

export default () => {
  return (
    <div id={styles.portfolio}>
      <SectionTitle>.Portfolio</SectionTitle>
      <div className={styles["vertical-center-section"]}>
        <div className={styles["projects-container"]}>
          <div className={styles["container-sizer"]}>
            <ul className={styles["nav-projects"]}>
              {projects.map((item, index) => <li key={index} className={styles["project-link"]}>{item.title}</li>)}
            </ul>
            <div className={styles["projects-preview"]}>
            {projects.map((item, index) => <Project key={index}></Project>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

{/* <Project key={item.id} project={item} /> */}