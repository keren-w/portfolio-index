import React, { Component } from "react";
import styles from "./style.css";
import Project from "../Project";
import projects from "../../static/json/projects.json";
import SectionTitle from "../SectionTitle";

export default class Portfolio extends Component {
  constructor() {
    super()
    this.state = {currentlyViewed: 1}
  }

  changeViewedProject(projectIndex) {
    let {currentlyViewed} = this.state;
    // console.log(projectIndex)
    console.log(currentlyViewed)
    if (projectIndex === currentlyViewed) {
      return;
    } else {
      return this.setState({currentlyViewed: projectIndex})
    }
  }

  render() {
    let {currentlyViewed} = this.state;
    return (
      <div id={styles.portfolio}>
        <SectionTitle>.Portfolio</SectionTitle>
        <div className={styles["section-vertical-centerer"]}>
          <div className={styles["view-centerer"]}>
            <div className={styles["view-sizer"]}>
              <ul className={styles["nav-projects"]}>
                {projects.map((item, index) => (
                  <li key={index} className={styles["project-link"]} onClick={() => this.changeViewedProject(item.id)}>
                    {item.title}
                  </li>
                ))}
              </ul>
              <div className={styles["projects-preview"]}>
                {projects.map((item, index) => {
                  return <Project key={index} item={item} isViewed={currentlyViewed === item.id}/>}
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
