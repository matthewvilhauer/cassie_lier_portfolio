import React, {PropTypes} from 'react';

const Project = ({project}) => {
  return (
    <div className="project-container">
      <div className="project-header">
				<h2 className="project-title"><a href={project.sitelink} target='_blank'>{project.title}</a></h2>
			</div>
			<div className="project-header">
				<a href={project.githublink} target='_blank'>
					<i className="social-media-icon fa fa-lg fa-github github"></i>
				</a>
			</div>
			<img src={project.image.src} alt="" className="project-img"/>
			<div className="description">{project.description}</div>
			<div className="tech-used">Technologies used: {project.technologies}</div>
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.object.isRequired
};

export default Project;
