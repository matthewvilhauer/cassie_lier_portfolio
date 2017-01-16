import React, {PropTypes} from 'react';
import Gallery from '../common/Gallery';

const ProjectList = ({projects}) => {
  return (
    <div className="project-list-container">
			{projects.map(project =>
				<div className="project-container col-md-4 col-sm-6"
						 key={project.id}>
					<Gallery
						images={project.images}
						heading={project.title}
						subheading={project.subtitle}
						showThumbnails
					/>
				</div>
			)}
		</div>
  );
};

ProjectList.propTypes = {
  models: PropTypes.array.isRequired
};

export default ProjectList;
