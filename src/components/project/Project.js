import React, {PropTypes} from 'react';

const Project = ({project}) => {
  return (
    <div class="project-container">
      <h1>{project.title}</h1>
			<div>{project.sitelink}</div>
			<img src={project.image.src} alt="" className="project-img"/>
			<div>{project.githublink}</div>
			<div>{project.description}</div>
			<div>{project.technologies}</div>
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.object.isRequired
};

export default Project;
