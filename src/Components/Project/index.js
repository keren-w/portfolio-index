import React from "react";
import styles from "./style.css";

export default ({ item, isViewed }) => {
  if (isViewed) {
    return (
      <div className={styles["view-project"]}>
        <ProjectDetails item={item} />
        <ProjectPreview item={item} />
      </div>
    );
  } else {
    return <div className={styles["hide-project"]} />;
  }
};

const ProjectDetails = ({ item }) => (
  <a href={item["repo-address"]} className={styles["project-details"]} data-hover="Project on Github">
    <ProjectTitle item={item} />
    <p className={styles["project-description"]}>{item.description}</p>
    <DisplayTags tagsArray={item.technologies}/>
  </a>
)

const ProjectPreview = ({item}) => {
  let imageUrl = require(`../../static/images/${item["project-main-image"]}`);
  let backgroundImage = {
    background: `url(${imageUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right top",
    backgroundSize:"cover"
  }
  return <a href={item["link-address"]} className={styles["project-preview"]} data-hover="Go to Project">
    <div className={styles["project-img"]} style={backgroundImage}></div>
  </a>
};

const ProjectTitle = ({ item }) => {
  return <h3 className={styles["project-title"]}>{item.title}</h3>;
};

const DisplayTags = ({tagsArray}) => (
  <div className={styles["tags-container"]}>
    {tagsArray.map((tag, index) => <Tag key={index} tagContent={tag} />)}
  </div>
);

const Tag = ({tagContent}) => {
  return <div className={styles.tag}>{tagContent}</div>
}