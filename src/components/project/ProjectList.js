import React, {PropTypes} from 'react';
import Project from './Project';

const ProjectList = ({projects}) => {
  return (
    <div className="project-list-container">
				{projects.map(project =>
					<Project key={project.id} project={project}/>
				)}
		</div>
  );
};

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired
};

export default ProjectList;
