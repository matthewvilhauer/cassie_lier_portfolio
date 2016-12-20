import React, {PropTypes} from 'react';

const Project = ({project}) => {
  return (
    <div className="project-container">
      <div className="project-header">
				<h2 className="project-title">{project.title}</h2>
			</div>
			<img src={project.images[0].src} alt="" className="project-img"/>
			<div className="description">{project.description}</div>
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.object.isRequired
};

export default Project;
