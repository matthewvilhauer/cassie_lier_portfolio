import React, {PropTypes} from 'react';

const Project = ({project}) => {
  return (
    <div className="project-container col-md-4 col-sm-6">
			<div className="img-container">
				<img src={project.images[0].src} alt="" className="project-img"/>
			</div>
      <div className="project-header">
				<h4 className="project-title">{project.title}</h4>
			</div>
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.object.isRequired
};

export default Project;
