import React, { Component } from 'react';
import styles from './style.css';
import Tag from '../Tag';

export default class project extends Component {
    constructor() {
        super();
        this.state = {showPreview: false}
        this.toggleProjectPreview = this.toggleProjectPreview.bind(this);
        this.projectPreview = this.projectPreview.bind(this);
    }

    toggleProjectPreview() {
        let currentlyPreviewing =  this.state.showPreview;
        this.setState({showPreview: !currentlyPreviewing})
    }

    projectPreview() {
        let {project} = this.props;
        return (
            <div className={styles['project-modal-container']}>
                <div className={styles['project-modal']}>
                    <a href={project['link-address']}>
                        <h3 className={styles['project-title']}>{project.title}</h3>
                    </a>
                    <p>{project.description}</p>
                    <div className={styles['tags-container']}>{displayTags(project.technologies)}</div>
                    <p><span>Go to repository</span></p>
                </div>
            </div>
        )
    }
    render() {
        let {showPreview} = this.state;
        return  (
            <div className={styles['p-item']} onClick={this.toggleProjectPreview}>
              <ProjectTitle project={this.props.project}/>
              {showPreview && this.projectPreview()}
            </div>
        )
    }
}

const ProjectTitle = ({project}) => {
    return (
        <h3 className={styles['project-title']}>{project.title}</h3>
    )
}

const displayTags = (tagsArray) => {
    return tagsArray.map((tag, index) => <Tag key={index} tagContent={tag}></Tag>)
}